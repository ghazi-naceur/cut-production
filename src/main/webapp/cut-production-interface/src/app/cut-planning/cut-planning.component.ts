import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ExcelService } from '../excel/excel.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CutPlanning } from './cut-planning';
import { CutPlanningService } from './cut-planning.service';
import { WeekWork } from './weekwork';
import { WeekWorkTable } from './weekworkcalendar';
import * as XLSX from 'xlsx';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-cut-planning',
    templateUrl: './cut-planning.component.html'
})

export class CutPlanningComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    dataSource: MatTableDataSource<CutPlanning>;
    displayedColumns = ['Date Export', 'Semaine', 'Client', 'Modèle', 'Article', 'Quantité', 'Rendement', 'Effectif',  'Temps présence',  'Taux Absentéisme', 'edit', 'delete'];

    cutPlannings: CutPlanning[] = [];
    weekWorks: WeekWork;
    statusCode: number;
    requestProcessing = false;
    cutPlanningIdToUpdate = null;
    processValidation = false;
    weekWorkTable: string[] = [];
    nextWeekTasksList: string[] = [];
    numberOfNextWeekTasks: Number = 0;
    @ViewChild('table') table: ElementRef;

    constructor(private cutPlanningService: CutPlanningService, 
        private formBuilder: FormBuilder,
        private excelService: ExcelService) {
    }

    cutPlanningForm = new FormGroup({
        exportDate: new FormControl('', Validators.required),
        planningWeek: new FormControl('', Validators.required),
        client: new FormControl('', Validators.required),
        model: new FormControl('', Validators.required),
        article: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        efficiency: new FormControl('', Validators.required),
        effective: new FormControl('', Validators.required),
        presenceTime: new FormControl('', Validators.required),
        absenteeismRate: new FormControl('', Validators.required)
    });

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.cutPlannings);
        this.dataSource.data = [];
        this.getAllCutPlannings();
        this.getAllWeekWorks();
    }

    onCutPlanningFormSubmit() {
        this.processValidation = true;

        if (this.cutPlanningForm.invalid) {
            return;
        }

        this.preProcessConfigurations();
        let cutPlanning = this.cutPlanningForm.value;
        if (this.cutPlanningIdToUpdate == null) {
            this.cutPlanningService.createCutPlanning(cutPlanning)
                .subscribe(successCode => {
                    this.statusCode = successCode;
                    this.backToCreateCutPlanning();
                    setTimeout(() => {
                        this.getAllCutPlannings();
                        this.getAllWeekWorks();
                    }, 1000)
                },
                    errorCode => this.statusCode = errorCode
                );
        } else {
            cutPlanning.id = this.cutPlanningIdToUpdate;
            this.cutPlanningService.updateCutPlanning(cutPlanning)
                .subscribe(successCode => {
                    this.statusCode = successCode;
                    this.getAllCutPlannings();
                    this.getAllWeekWorks();
                    this.backToCreateCutPlanning();
                    setTimeout(() => {
                        this.getAllCutPlannings();
                        this.getAllWeekWorks();
                    }, 1000)
                },
                    errorCode => this.statusCode = errorCode);
        }


    }

    backToCreateCutPlanning() {
        this.cutPlanningForm.reset();
        this.processValidation = false;
        this.cutPlanningIdToUpdate = null;
    }

    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }

    getAllCutPlannings() {
        this.cutPlanningService.getAllCutPlannings()
            .subscribe(
                data => {
                    this.cutPlannings = data;
                    this.dataSource = new MatTableDataSource(this.cutPlannings);
                    this.dataSource.paginator = this.paginator;
                },
                errorCode => this.statusCode = errorCode);
    }

    getAllWeekWorks() {
        this.cutPlanningService.getAllWeekWorks()
            .subscribe(
                data => {
                    this.weekWorks = data;
                    
                    if(this.weekWorks.nextWeekTasks == null || this.weekWorks.nextWeekTasks == undefined) {
                        this.weekWorks.nextWeekTasks = [];
                    }
                    if(this.weekWorks.currentWeekTasks == null || this.weekWorks.currentWeekTasks == undefined) {
                        this.weekWorks.currentWeekTasks = [];
                    }

                    if(this.weekWorks.currentWeekTasks.length == 95 && this.weekWorks.nextWeekTasks.length > 0) {
                        this.weekWorkTable = [...this.weekWorks.currentWeekTasks, ...this.weekWorks.nextWeekTasks];
                        this.numberOfNextWeekTasks = this.weekWorks.nextWeekTasks.length;
                    } else {
                        this.weekWorkTable = [...this.weekWorks.currentWeekTasks];
                        this.numberOfNextWeekTasks = 0;             
                    }
                },
                errorCode => this.statusCode = errorCode);
    }

    loadCutPlanningToEdit(cutPlanningId: string) {
        this.preProcessConfigurations();
        this.cutPlanningService.getCutPlanningById(cutPlanningId)
            .subscribe(cutPlanning => {
                this.cutPlanningIdToUpdate = cutPlanning.id;
                this.cutPlanningForm.setValue({
                    exportDate: cutPlanning.exportDate.toString().slice(0, 10),
                    planningWeek: cutPlanning.planningWeek, 
                    client: cutPlanning.client,
                    model: cutPlanning.model,
                    article: cutPlanning.article,
                    quantity: cutPlanning.quantity,
                    efficiency: cutPlanning.efficiency,
                    effective: cutPlanning.effective,
                    presenceTime: cutPlanning.presenceTime,
                    absenteeismRate: cutPlanning.absenteeismRate
                });
                
                this.processValidation = true;
                this.requestProcessing = false;
            },
                errorCode => this.statusCode = errorCode);
    }

    deleteCutPlanning(cutPlanningId: string) {
        this.preProcessConfigurations();
        this.cutPlanningService.deleteCutPlanningById(cutPlanningId)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.statusCode = 204;
                this.backToCreateCutPlanning();

                setTimeout(() => {
                    this.getAllCutPlannings();
                    this.getAllWeekWorks();
                }, 1000)
            },
                errorCode => this.statusCode = errorCode);
    }

    searchCutPlannings(criteria) {
        this.cutPlanningService.searchCutPlannings(criteria)
            .subscribe(data => this.cutPlannings = data,
                errorCode => this.statusCode = errorCode);
    }

    exportAsXLSX():void {
        this.getAllWeekWorks();
        this.getAllCutPlannings();
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'Planning - '+new Date().toString().slice(0, 24)+'.xlsx');
    }

    clearCutPlannings() {
        this.cutPlanningService.clearCutPlannings().subscribe(data => {
            setTimeout(() => {
                this.getAllCutPlannings();
                this.getAllWeekWorks();
            }, 1000)
        },
            errorCode => this.statusCode = errorCode)
    }
}