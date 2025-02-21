import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { OrderService } from './order.service';
import { Order } from './order';
import { ExcelService } from '../excel/excel.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit, AfterViewInit {

    // @ViewChild(MatPaginator) paginator: MatPaginator;
    // dataSource: MatTableDataSource<Order>;

    orders: Order[] = [];
    statusCode: number;
    requestProcessing = false;
    orderIdToUpdate = null;
    processValidation = false;
    providedInput: string;
    files: string[] = [];

    displayedColumns = ['Client', 'Modèle', 'Article', 'Min Confection', 'Min Coupe', 'edit', 'delete'];

    constructor(private orderService: OrderService, 
        private formBuilder: FormBuilder,
        private excelService: ExcelService) {
    }

    dataFilesForm = new FormGroup({
        path: new FormControl('', Validators.required)
      });

    orderForm = new FormGroup({
        client: new FormControl('', Validators.required),
        model: new FormControl('', Validators.required),
        article: new FormControl('', Validators.required),
        minConfection: new FormControl('', Validators.required),
        minCut: new FormControl('', Validators.required)
    });

    searchOrderForm = this.formBuilder.group({
        client: ['', ],
        model: ['', ],
        article: ['', ],
        minConfection: ['', ],
        minCut: ['', ]
    });

    ngOnInit(): void {
        this.getAllOrders();
    }

    ngAfterViewInit() {
    }

    onOrderFormSubmit() {
        this.processValidation = true;

        if (this.orderForm.invalid) {
            return;
        }

        this.preProcessConfigurations();
        let order = this.orderForm.value;
        if (this.orderIdToUpdate == null) {
            this.orderService.createOrder(order)
                .subscribe(successCode => {
                    this.statusCode = successCode;
                    this.backToCreateOrder();
                    setTimeout(() => {
                        this.getAllOrders();
                    }, 1000)
                },
                    errorCode => this.statusCode = errorCode
                );
        } else {
            order.id = this.orderIdToUpdate;
            this.orderService.updateOrder(order)
                .subscribe(successCode => {
                    this.statusCode = successCode;
                    this.getAllOrders();
                    this.backToCreateOrder();
                    setTimeout(() => {
                        this.getAllOrders();
                    }, 1000)
                },
                    errorCode => this.statusCode = errorCode);
        }


    }

    backToCreateOrder() {
        this.orderForm.reset();
        this.processValidation = false;
        this.orderIdToUpdate = null;
    }

    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }

    sendPath() {
        this.preProcessConfigurations();
        let dataFiles = this.dataFilesForm.value;
        this.orderService.sendPath(dataFiles).subscribe(
          data =>{
            this.files = data;
            this.statusCode = 201;
            this.providedInput = null;
            setTimeout(() => {
              this.getAllOrders();
          }, 1000)
          },
          errorCode => this.statusCode = errorCode);
      }

      isInvalid() {
        return this.providedInput == undefined || this.providedInput == ""
      }

    getAllOrders() {
        this.orderService.getAllOrders()
            .subscribe(
                data => {
                    this.orders = data;
                    // this.dataSource = new MatTableDataSource(this.orders);
                    // this.dataSource.paginator = this.paginator;
                },
                errorCode => this.statusCode = errorCode);
    }

    loadOrderToEdit(orderId: string) {
        this.preProcessConfigurations();
        this.orderService.getOrderById(orderId)
            .subscribe(order => {
                this.orderIdToUpdate = order.id;
                this.orderForm.setValue({
                    client: order.client,
                    model: order.model, 
                    article: order.article,
                    minConfection: order.minConfection,
                    minCut: order.minCut
                });
                this.processValidation = true;
                this.requestProcessing = false;
            },
                errorCode => this.statusCode = errorCode);
    }

    deleteOrder(orderId: string) {
        this.preProcessConfigurations();
        this.orderService.deleteOrderById(orderId)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.statusCode = 204;
                this.backToCreateOrder();

                setTimeout(() => {
                    this.getAllOrders();
                }, 1000)
            },
                errorCode => this.statusCode = errorCode);
    }

    searchOrders(criteria) {
        this.orderService.searchOrders(criteria)
            .subscribe(data => this.orders = data,
                errorCode => this.statusCode = errorCode);
    }

    onSearchOrderFormSubmit() {

        this.preProcessConfigurations();
        let searchCriteria = this.searchOrderForm.value;
        if (searchCriteria.client == "") {
            delete searchCriteria.client
        }
        if (searchCriteria.model == "") {
            delete searchCriteria.model
        }
        if (searchCriteria.article == "") {
            delete searchCriteria.article
        }
        if (searchCriteria.minConfection == "") {
            delete searchCriteria.minConfection
        }
        if (searchCriteria.minCut == "") {
            delete searchCriteria.minCut
        }
        this.orderService.searchOrders(searchCriteria)
            .subscribe(data => this.orders = data,
                errorCode => this.statusCode = errorCode);
        this.requestProcessing = false;
        this.searchOrderForm.reset();
    }

    refresh(){
        this.searchOrderForm.reset();
    }

    exportAsXLSX():void {
        this.excelService.exportAsExcelFile(this.orders, 'Commandes - '+new Date().toString().slice(0, 24));
    }
}