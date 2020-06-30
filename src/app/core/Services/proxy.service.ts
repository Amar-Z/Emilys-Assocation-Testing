import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable } from 'Rxjs';
import {map} from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable()
export class Proxy {
APIBaseUrl = '';
url = '';
constructor(public api: HttpClient, private common: CommonService) {
this.APIBaseUrl = common.APIUrl;
}
GetMostValuableCustomer(i_Params_GetMostValuableCustomer: Params_GetMostValuableCustomer) : Observable<Customer> {
this.url = this.APIBaseUrl + '/GetMostValuableCustomer?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_GetMostValuableCustomer>(this.url, JSON.stringify(i_Params_GetMostValuableCustomer), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Customer(i_Customer: Customer) : Observable<Customer> {
this.url = this.APIBaseUrl + '/Edit_Customer?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Customer>(this.url, JSON.stringify(i_Customer), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Customer;}));
}
Delete_Customer(i_Params_Delete_Customer: Params_Delete_Customer) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Customer?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Customer), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Customer_By_OWNER_ID(i_Params_Get_Customer_By_OWNER_ID: Params_Get_Customer_By_OWNER_ID) : Observable<Customer[]> {
this.url = this.APIBaseUrl + '/Get_Customer_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Customer_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Customer_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Payment(i_Payment: Payment) : Observable<Payment> {
this.url = this.APIBaseUrl + '/Edit_Payment?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Payment>(this.url, JSON.stringify(i_Payment), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Payment;}));
}
GetData(i_Params_GetData: Params_GetData) : Observable<String> {
this.url = this.APIBaseUrl + '/GetData?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_GetData>(this.url, JSON.stringify(i_Params_GetData), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Authenticate(i_Params_Authenticate: Params_Authenticate) : Observable<User> {
this.url = this.APIBaseUrl + '/Authenticate?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Authenticate>(this.url, JSON.stringify(i_Params_Authenticate), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Teacher_By_OWNER_ID(i_Params_Get_Teacher_By_OWNER_ID: Params_Get_Teacher_By_OWNER_ID) : Observable<Teacher[]> {
this.url = this.APIBaseUrl + '/Get_Teacher_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Teacher_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Teacher_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Course_By_TEACHER_ID(i_Params_Get_Course_By_TEACHER_ID: Params_Get_Course_By_TEACHER_ID) : Observable<Course[]> {
this.url = this.APIBaseUrl + '/Get_Course_By_TEACHER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Course_By_TEACHER_ID>(this.url, JSON.stringify(i_Params_Get_Course_By_TEACHER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_News(i_News: News) : Observable<News> {
this.url = this.APIBaseUrl + '/Edit_News?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_News>(this.url, JSON.stringify(i_News), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_News;}));
}
Delete_News(i_Params_Delete_News: Params_Delete_News) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_News?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_News), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_News_By_Where_InList(i_Params_Get_News_By_Where_InList: Params_Get_News_By_Where_InList) : Observable<News[]> {
this.url = this.APIBaseUrl + '/Get_News_By_Where_InList?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_News_By_Where_InList>(this.url, JSON.stringify(i_Params_Get_News_By_Where_InList), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Teacher(i_Teacher: Teacher) : Observable<Teacher> {
this.url = this.APIBaseUrl + '/Edit_Teacher?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Teacher>(this.url, JSON.stringify(i_Teacher), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Teacher;}));
}
Delete_Teacher(i_Params_Delete_Teacher: Params_Delete_Teacher) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Teacher?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Teacher), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Teacher_By_Where(i_Params_Get_Teacher_By_Where: Params_Get_Teacher_By_Where) : Observable<Teacher[]> {
this.url = this.APIBaseUrl + '/Get_Teacher_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Teacher_By_Where>(this.url, JSON.stringify(i_Params_Get_Teacher_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_News_category_By_OWNER_ID(i_Params_Get_News_category_By_OWNER_ID: Params_Get_News_category_By_OWNER_ID) : Observable<News_category[]> {
this.url = this.APIBaseUrl + '/Get_News_category_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_News_category_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_News_category_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Uploaded_file(i_Uploaded_file: Uploaded_file) : Observable<Uploaded_file> {
this.url = this.APIBaseUrl + '/Edit_Uploaded_file?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Uploaded_file>(this.url, JSON.stringify(i_Uploaded_file), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Uploaded_file;}));
}
Delete_Uploaded_file(i_Params_Delete_Uploaded_file: Params_Delete_Uploaded_file) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Uploaded_file?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD: Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
// SubmitAction(Dt : DataDetails) : Observable<string> {
//     this.url = this.APIBaseUrl + '/SubmitAction?Ticket=' + this.common.ticket;
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
//     const options = { headers: headers };
//     return this.api.post<Result_SubmitAction>(this.url, JSON.stringify(Dt), options)
//     .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
// }
// SubmitAction(Dt: DataDetails) : Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
//     const options = { headers: headers };
// return this.api.post<Result_SubmitAction>(this.common.APIUrl,JSON.stringify(Dt),options);
// }
}
// tslint:disable-next-line: class-name
export class Params_GetMostValuableCustomer
{
}
export class Customer
{
CUSTOMER_ID?: number;
FIRST_NAME: string;
LAST_NAME: string;
EMAIL: string;
GENDER_CODE: string;
WEIGHT_CAT_CODE: string;
CUST_CAT_ID?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Cust_cat: Cust_cat;
}
// tslint:disable-next-line: class-name
export class Cust_cat
{
CUST_CAT_ID?: number;
NAME: string;
DESCRIPTION: string;
DISCOUNT_PCT: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
// tslint:disable-next-line: class-name
export class Params_Delete_Customer
{
CUSTOMER_ID?: number;
}
// tslint:disable-next-line: class-name
export class Params_Get_Customer_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Payment
{
PAYMENT_ID?: number;
CUSTOMER_ID?: number;
CURRENCY_ID?: number;
PAY_DATE: string;
PAY_AMOUNT: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
My_Customer: Customer;
My_Currency: Currency;
}
// tslint:disable-next-line: class-name
export class Params_GetData
{
}
// tslint:disable-next-line: class-name
export class Params_Authenticate
{
USERNAME: string;
PASSWORD: string;
source: string;
}
export class DataDetails
{
HelpOrExp : string;
OnOff : string;
msgUser: string;
FirstName: string;
LastName: string;
Address: string;
postalCode: number;
city: string;
type: string;
amount: number;
email: string;

}
export class User
{
USER_ID?: number;
OWNER_ID?: number;
USERNAME: string;
PASSWORD: string;
USER_TYPE_CODE: string;
USER_STATUS_CODE: string;
IS_ACTIVE?: boolean;
ENTRY_DATE: string;
My_Ticket: string;
}
export class Params_Get_Teacher_By_OWNER_ID
{
OWNER_ID?: number;
ByPass_Caching: boolean;
}
export class Teacher
{
TEACHER_ID?: number;
FIRST_NAME: string;
LAST_NAME: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
// tslint:disable-next-line: class-name
export class Params_Get_Course_By_TEACHER_ID
{
TEACHER_ID?: number;
ByPass_Caching: boolean;
}
export class Course
{
COURSE_ID?: number;
NAME: string;
DESCRIPTION: string;
CREDIT_NBR?: number;
TEACHER_ID?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Teacher: Teacher;
}
export class News
{
NEWS_ID?: number;
NEWS_CATEGORY_ID?: number;
TITLE: string;
DESCRIPTION: string;
NEWS_DATE: string;
LATITUDE?: number;
LONGITUDE?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_News_category: News_category;
My_Uploaded_files: Uploaded_file[];
}
// tslint:disable-next-line: class-name
export class News_category
{
NEWS_CATEGORY_ID?: number;
NAME: string;
DESCRIPTION: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
// tslint:disable-next-line: class-name
export class Uploaded_file
{
UPLOADED_FILE_ID?: number;
REL_ENTITY: string;
REL_KEY?: number;
REL_FIELD: string;
SIZE?: number;
EXTENSION: string;
STAMP: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_URL: string;
}
// tslint:disable-next-line: class-name
export class Params_Delete_News
{
NEWS_ID?: number;
}
// tslint:disable-next-line: class-name
export class Params_Get_News_By_Where_InList
{
OWNER_ID?: number;
TITLE: string;
DESCRIPTION: string;
NEWS_CATEGORY_ID_LIST: number[];
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
// tslint:disable-next-line: class-name
export class Params_Delete_Teacher
{
TEACHER_ID?: number;
}
// tslint:disable-next-line: class-name
export class Params_Get_Teacher_By_Where
{
OWNER_ID?: number;
FIRST_NAME: string;
LAST_NAME: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
// tslint:disable-next-line: class-name
export class Params_Get_News_category_By_OWNER_ID
{
OWNER_ID?: number;
}
// tslint:disable-next-line: class-name
export class Params_Delete_Uploaded_file
{
UPLOADED_FILE_ID?: number;
}
// tslint:disable-next-line: class-name
export class Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD
{
REL_ENTITY: string;
REL_KEY?: number;
REL_FIELD: string;
}
export class Currency
{
CURRENCY_ID?: number;
NAME: string;
SYMBOL: string;
MIN_PAY_AMOUNT?: number;
MAX_PAY_AMOUNT?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
// tslint:disable-next-line: class-name
export class Action_Result{
ExceptionMsg: string;
}
// tslint:disable-next-line: class-name
export class Result_GetMostValuableCustomer extends Action_Result {
My_Result : Customer;
My_Params_GetMostValuableCustomer : Params_GetMostValuableCustomer;

}
// tslint:disable-next-line: class-name
export class Result_Edit_Customer extends Action_Result {
My_Customer : Customer;
}
// tslint:disable-next-line: class-name
export class Result_Delete_Customer extends Action_Result {
My_Params_Delete_Customer : Params_Delete_Customer;
}
// tslint:disable-next-line: class-name
export class Result_Get_Customer_By_OWNER_ID extends Action_Result {
My_Result : Customer[];
My_Params_Get_Customer_By_OWNER_ID : Params_Get_Customer_By_OWNER_ID;
}
// tslint:disable-next-line: class-name
export class Result_Edit_Payment extends Action_Result {
My_Payment : Payment;
}
// tslint:disable-next-line: class-name
export class Result_GetData extends Action_Result {
My_Result : String;
My_Params_GetData : Params_GetData;

}
// tslint:disable-next-line: class-name
export class Result_Authenticate extends Action_Result {
My_Result : User;
My_Params_Authenticate : Params_Authenticate;
}
// tslint:disable-next-line: class-name
export class Result_SubmitAction extends Action_Result{
    My_Result: string;
    My_Dt = DataDetails;
}
// tslint:disable-next-line: class-name
export class Result_Get_Teacher_By_OWNER_ID extends Action_Result {
My_Result : Teacher[];
My_Params_Get_Teacher_By_OWNER_ID : Params_Get_Teacher_By_OWNER_ID;
}
// tslint:disable-next-line: class-name
export class Result_Get_Course_By_TEACHER_ID extends Action_Result {
My_Result : Course[];
My_Params_Get_Course_By_TEACHER_ID : Params_Get_Course_By_TEACHER_ID;
}
// tslint:disable-next-line: class-name
export class Result_Edit_News extends Action_Result {
My_News : News;
}
// tslint:disable-next-line: class-name
export class Result_Delete_News extends Action_Result {
My_Params_Delete_News : Params_Delete_News;
}
// tslint:disable-next-line: class-name
export class Result_Get_News_By_Where_InList extends Action_Result {
My_Result : News[];
My_Params_Get_News_By_Where_InList : Params_Get_News_By_Where_InList;
}
// tslint:disable-next-line: class-name
export class Result_Edit_Teacher extends Action_Result {
My_Teacher : Teacher;
}
// tslint:disable-next-line: class-name
export class Result_Delete_Teacher extends Action_Result {
My_Params_Delete_Teacher : Params_Delete_Teacher;
}
// tslint:disable-next-line: class-name
export class Result_Get_Teacher_By_Where extends Action_Result {
My_Result : Teacher[];
My_Params_Get_Teacher_By_Where : Params_Get_Teacher_By_Where;
}
// tslint:disable-next-line: class-name
export class Result_Get_News_category_By_OWNER_ID extends Action_Result {
My_Result : News_category[];
My_Params_Get_News_category_By_OWNER_ID : Params_Get_News_category_By_OWNER_ID;
}
// tslint:disable-next-line: class-name
export class Result_Edit_Uploaded_file extends Action_Result {
My_Uploaded_file : Uploaded_file;
}
// tslint:disable-next-line: class-name
export class Result_Delete_Uploaded_file extends Action_Result {
My_Params_Delete_Uploaded_file : Params_Delete_Uploaded_file;
}
// tslint:disable-next-line: class-name
export class Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD extends Action_Result {
My_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD : Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD;
}
