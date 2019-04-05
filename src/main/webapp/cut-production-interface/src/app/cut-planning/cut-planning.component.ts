import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ExcelService } from '../excel/excel.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CutPlanning } from './cut-planning';
import { CutPlanningService } from './cut-planning.service';

@Component({
    selector: 'app-cut-planning',
    templateUrl: './cut-planning.component.html'
})

export class CutPlanningComponent implements OnInit {

    cutPlannings: CutPlanning[];
    statusCode: number;
    requestProcessing = false;
    cutPlanningIdToUpdate = null;
    processValidation = false;

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
        day: new FormControl('', Validators.required),
        presenceTime: new FormControl('', Validators.required),
        cutResponsable: new FormControl('', Validators.required),
        absenteeismRate: new FormControl('', Validators.required)
    });

    // searchCutPlanningForm = this.formBuilder.group({
    //     client: ['', ],
    //     model: ['', ],
    //     article: ['', ],
    //     minConfection: ['', ],
    //     minCut: ['', ]
    // });

    ngOnInit(): void {
        this.getAllCutPlannings();
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
                    }, 500)
                },
                    errorCode => this.statusCode = errorCode
                );
        } else {
            cutPlanning.id = this.cutPlanningIdToUpdate;
            this.cutPlanningService.updateCutPlanning(cutPlanning)
                .subscribe(successCode => {
                    this.statusCode = successCode;
                    this.getAllCutPlannings();
                    this.backToCreateCutPlanning();
                    setTimeout(() => {
                        this.getAllCutPlannings();
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
                data => this.cutPlannings = data,
                errorCode => this.statusCode = errorCode);
    }

    loadCutPlanningToEdit(cutPlanningId: string) {
        this.preProcessConfigurations();
        this.cutPlanningService.getCutPlanningById(cutPlanningId)
            .subscribe(cutPlanning => {
                this.cutPlanningIdToUpdate = cutPlanning.id;
                this.cutPlanningForm.setValue({
                    exportDate: cutPlanning.exportDate.slice(0, 10),
                    planningWeek: cutPlanning.planningWeek, 
                    client: cutPlanning.client,
                    model: cutPlanning.model,
                    article: cutPlanning.article,
                    quantity: cutPlanning.quantity,
                    efficiency: cutPlanning.efficiency,
                    effective: cutPlanning.effective,
                    day: cutPlanning.day,
                    presenceTime: cutPlanning.presenceTime,
                    cutResponsable: cutPlanning.cutResponsable,
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
                }, 500)
            },
                errorCode => this.statusCode = errorCode);
    }

    searchCutPlannings(criteria) {
        this.cutPlanningService.searchCutPlannings(criteria)
            .subscribe(data => this.cutPlannings = data,
                errorCode => this.statusCode = errorCode);
    }

    // onSearchCutPlanningFormSubmit() {

    //     this.preProcessConfigurations();
    //     let searchCriteria = this.searchCutPlanningForm.value;
    //     if (searchCriteria.client == "") {
    //         delete searchCriteria.client
    //     }
    //     if (searchCriteria.model == "") {
    //         delete searchCriteria.model
    //     }
    //     if (searchCriteria.article == "") {
    //         delete searchCriteria.article
    //     }
    //     if (searchCriteria.minConfection == "") {
    //         delete searchCriteria.minConfection
    //     }
    //     if (searchCriteria.minCut == "") {
    //         delete searchCriteria.minCut
    //     }
    //     this.cutPlanningService.searchCutPlannings(searchCriteria)
    //         .subscribe(data => this.cutPlannings = data,
    //             errorCode => this.statusCode = errorCode);
    //     this.requestProcessing = false;
    //     this.searchCutPlanningForm.reset();
    // }

    // refresh(){
    //     this.searchCutPlanningForm.reset();
    // }

    exportAsXLSX():void {
        this.excelService.exportAsExcelFile(this.cutPlannings, 'cut-planning');
    }
}