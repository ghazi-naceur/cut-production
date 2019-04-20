import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ExcelService } from '../excel/excel.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import * as XLSX from 'xlsx';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ProductionPlanning } from './production-planning';
import { ProdWeekWork } from './prodweekwork';
import { ProductionPlanningService } from './production-planning.service';

@Component({
    selector: 'app-production-planning',
    templateUrl: './production-planning.component.html'
})

export class ProductionPlanningComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    dataSource: MatTableDataSource<ProductionPlanning>;
    displayedColumns = ['Date Export', 'Semaine', 'Client', 'Modèle', 'Article', 'Numéro Commande' , 'Resp Chaine' ,'Quantité', 'Rendement', 'Effectif', 'Taux Absentéisme', 'edit', 'delete'];

    prodPlannings: ProductionPlanning[] = [];
    prodWeekWorks: ProdWeekWork;
    statusCode: number;
    requestProcessing = false;
    prodPlanningIdToUpdate = null;
    processValidation = false;
    prodWeekWorkTable: string[] = [];
    prodNextWeekTasksList: string[] = [];
    prodNumberOfNextWeekTasks: Number = 0;
    @ViewChild('table') table: ElementRef;

    // defaultExportDate: Date;

    constructor(private prodPlanningService: ProductionPlanningService, 
        private formBuilder: FormBuilder,
        private excelService: ExcelService) {
    }

    prodPlanningForm = new FormGroup({
        exportDate: new FormControl('', Validators.required),
        planningWeek: new FormControl('', Validators.required),
        client: new FormControl('', Validators.required),
        model: new FormControl('', Validators.required),
        article: new FormControl('', Validators.required),
        commandNumber : new FormControl('', Validators.required),
        chainResponsible : new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        efficiency: new FormControl('', Validators.required),
        effective: new FormControl('', Validators.required),
        absenteeismRate: new FormControl('', Validators.required)
    });

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.prodPlannings);
        this.dataSource.data = [];
        this.getAllProdPlannings();
        this.getAllProdWeekWorks();
    }

    onProdPlanningFormSubmit() {
        this.processValidation = true;

        if (this.prodPlanningForm.invalid) {
            return;
        }

        this.preProcessConfigurations();
        let prodPlanning = this.prodPlanningForm.value;
        if (this.prodPlanningIdToUpdate == null) {
            this.prodPlanningService.createProdPlanning(prodPlanning)
                .subscribe(successCode => {
                    this.statusCode = successCode;
                    this.backToCreateProdPlanning();
                    setTimeout(() => {
                        this.getAllProdPlannings();
                        this.getAllProdWeekWorks();
                    }, 1000)
                },
                    errorCode => this.statusCode = errorCode
                );
        } else {
            prodPlanning.id = this.prodPlanningIdToUpdate;
            this.prodPlanningService.updateProdPlanning(prodPlanning)
                .subscribe(successCode => {
                    this.statusCode = successCode;
                    this.getAllProdPlannings();
                    this.getAllProdWeekWorks();
                    this.backToCreateProdPlanning();
                    setTimeout(() => {
                        this.getAllProdPlannings();
                        this.getAllProdWeekWorks();
                    }, 1000)
                },
                    errorCode => this.statusCode = errorCode);
        }


    }

    resetForm() {
        this.prodPlanningForm.reset();
        for( let i in this.prodPlanningForm.controls ) {
            this.prodPlanningForm.controls[i].setErrors(null);
        }
    }

    backToCreateProdPlanning() {
        this.processValidation = false;
        this.prodPlanningIdToUpdate = null;
    }

    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }

    getAllProdPlannings() {
        this.prodPlanningService.getAllProdPlannings()
            .subscribe(
                data => {
                    this.prodPlannings = data;
                    this.dataSource = new MatTableDataSource(this.prodPlannings);
                    this.dataSource.paginator = this.paginator;
                },
                errorCode => this.statusCode = errorCode);
    }

    getAllProdWeekWorks() {
        this.prodPlanningService.getAllProdWeekWorks()
            .subscribe(
                data => {
                    this.prodWeekWorks = data;
                    
                    if(this.prodWeekWorks.prodNextWeekTasks == null || this.prodWeekWorks.prodNextWeekTasks == undefined) {
                        this.prodWeekWorks.prodNextWeekTasks = [];
                    }
                    if(this.prodWeekWorks.prodCurrentWeekTasks == null || this.prodWeekWorks.prodCurrentWeekTasks == undefined) {
                        this.prodWeekWorks.prodCurrentWeekTasks = [];
                    }

                    if(this.prodWeekWorks.prodCurrentWeekTasks.length == 95 && this.prodWeekWorks.prodNextWeekTasks.length > 0) {
                        this.prodWeekWorkTable = [...this.prodWeekWorks.prodCurrentWeekTasks, ...this.prodWeekWorks.prodNextWeekTasks];
                        this.prodNumberOfNextWeekTasks = this.prodWeekWorks.prodNextWeekTasks.length;
                    } else {
                        this.prodWeekWorkTable = [...this.prodWeekWorks.prodCurrentWeekTasks];
                        this.prodNumberOfNextWeekTasks = 0;             
                    }
                },
                errorCode => this.statusCode = errorCode);
    }

    loadProdPlanningToEdit(prodPlanningId: string) {
        this.preProcessConfigurations();
        this.prodPlanningService.getProdPlanningById(prodPlanningId)
            .subscribe(prodPlanning => {
                this.prodPlanningIdToUpdate = prodPlanning.id;
                this.prodPlanningForm.setValue({
                    exportDate: prodPlanning.exportDate.toString().slice(0, 10),
                    planningWeek: prodPlanning.planningWeek, 
                    client: prodPlanning.client,
                    model: prodPlanning.model,
                    article: prodPlanning.article,
                    commandNumber : prodPlanning.commandNumber,
                    chainResponsible : prodPlanning.chainResponsible,
                    quantity: prodPlanning.quantity,
                    efficiency: prodPlanning.efficiency,
                    effective: prodPlanning.effective,
                    absenteeismRate: prodPlanning.absenteeismRate
                });
                
                this.processValidation = true;
                this.requestProcessing = false;
            },
                errorCode => this.statusCode = errorCode);
    }

    deleteProdPlanning(prodPlanningId: string) {
        this.preProcessConfigurations();
        this.prodPlanningService.deleteProdPlanningById(prodPlanningId)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.statusCode = 204;
                this.backToCreateProdPlanning();

                setTimeout(() => {
                    this.getAllProdPlannings();
                    this.getAllProdWeekWorks();
                }, 1000)
            },
                errorCode => this.statusCode = errorCode);
    }

    searchProdPlannings(criteria) {
        this.prodPlanningService.searchProdPlannings(criteria)
            .subscribe(data => this.prodPlannings = data,
                errorCode => this.statusCode = errorCode);
    }

    exportAsXLSX():void {
        this.getAllProdWeekWorks();
        this.getAllProdPlannings();
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'PlanningProduction - '+new Date().toString().slice(0, 24)+'.xlsx');
    }
}