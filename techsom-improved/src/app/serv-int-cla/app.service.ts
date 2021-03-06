import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { dayn, ready, directory, notes, employees } from '../serv-int-cla/interface-class';
import { history, expenses, expenses_major, expenses_minor } from '../serv-int-cla/interface-class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { check, cash, amano } from '../serv-int-cla/interface-class';
// import { amanoBalance } from './amano.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http:Http) { }



  getAmano(): Observable<amano[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/amano.php').map((response: Response)=><amano[]>response.json());
  }

  getAmanoBalance(): Observable<amano[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/amano_balance.php').map((response: Response)=><amano[]>response.json());
  }
  

  // addEmployee(info){
  //   return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_update.php",info)
  //     .map(()=>"");
  // }
  addEmployee(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_update.php",info)
      .map((response: Response)=> response.json());
  }

  addbal(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_update_balance.php",info)
      .map(()=>"");
  }

  withbal(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_update_balance_with.php",info)
      .map(()=>"");
  }

  deleteEmployee_amano(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_delete.php",info)
      .map(()=>"");
  }


  delete_inner(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_inner.php",info)
      .map(()=>"");
  }

  confirm(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/confirm.php",info)
      .map(()=>"");
  }


  getAmanoB(info): Observable<amano[]>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_balance.php",info)
      .map((response: Response)=><amano[]>response.json());
  }

  // getEmployee_amano(id){
  //   return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_up.php",id)
  //     .map(res=>res.json());
  // }
  updateEmployee_amano(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_up_update.php?",info)
      .map(()=>"");
  }

  getAmanoC(info): Observable<amano[]>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_name.php",info)
      .map((response: Response)=><amano[]>response.json());
  }

  t_negative(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_t_negative.php",info)
      .map((response: Response)=> response.json());
  }


  t_all(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_t_all.php",info)
      .map((response: Response)=> response.json());
  }

  overall(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/overall.php",info)
      .map((response: Response)=> response.json());
  }

  get_settings(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/get_settings.php",info)
      .map(()=>"");
  }

  login(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/login.php",info)
      .map((response: Response)=> response.json());
  }

  settings() {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/settings.php').map((response: Response)=> response.json());
  }

  checks(): Observable<check[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/check.php').map((response: Response)=><check[]>response.json());
  }

  cashs(): Observable<cash[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/cash.php').map((response: Response)=><cash[]>response.json());
  }
  addcheck(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/check_add.php",info)
      .map((response: Response)=> response.json());
  }

  addcash(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/cash_add.php",info)
      .map((response: Response)=> response.json());
  }

  addeposit(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/cash_deposit.php",info)
      .map((response: Response)=> response.json());
  }

  // addeposit(info){
  //   return this.http.post("http://localhost/~abshirjama/techsom-improved/cash_deposit.php",info)
  //     .map(()=>"");
  // }

  // checkdeposit(info){
  //   return this.http.post("http://localhost/~abshirjama/techsom-improved/check_deposit.php",info)
  //     .map(()=>"");
  // }

  checkdeposit(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/check_deposit.php",info)
      .map((response: Response)=> response.json());
  }

  getcash(id){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_up.php",id)
      .map(res=>res.json());
  }

  getcheck(id){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/amano_up.php",id)
      .map(res=>res.json());
  }

  singlecash(id){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/cash_single.php",id)
      .map(res=>res.json());
  }

  singlecheck(id){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/check_single.php",id)
      .map(res=>res.json());
  }

  updatecheck(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/check_up_update.php?",info)
      .map(()=>"");
  }

  updatecash(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/cash_up_update.php?",info)
      .map(()=>"");
  }

  updatecash_status_on(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/cash_up_update_status_on.php?",info)
      .map(()=>"");
  }

  updatecash_status_off(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/cash_up_update_status_off.php?",info)
      .map(()=>"");
  }

  delete_ca(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/cash_delete.php",info)
      .map(()=>"");
  }

  send_email(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/send_files.php",info)
      .map(()=>"");
  }

  delete_ch(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/check_delete.php",info)
      .map(()=>"");
  }

  cash_total(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/cash_total.php",info)
      .map((response: Response)=> response.json());
  }

  check_total(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/check_total.php",info)
      .map((response: Response)=> response.json());
  }

  drop(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/drop.php",info)
      .map((response: Response)=> response.json());
  }

  getcash_total_selected() {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/cash_total_selected.php').map((response: Response)=> response.json());
  }

  getcheck_total_selected() {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/check_total_selected.php').map((response: Response)=> response.json());
  }

  getDayn(): Observable<dayn[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/dayn.php').map((response: Response)=><dayn[]>response.json());
  }

  getEmployees(): Observable<employees[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/employees.php').map((response: Response)=><employees[]>response.json());
  }

  getready(): Observable<ready[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/ready.php').map((response: Response)=><ready[]>response.json());
  }

  dayn_all(): Observable<any> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/dayn_all.php').map((response: Response)=><dayn[]>response.json());
  }

  dayn_negative(): Observable<any> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/dayn_all.php?id=1').map((response: Response)=><dayn[]>response.json());
  }

  addDayn(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/dayn_update.php",info)
      .map((response: Response)=> response.json());
  }

  addExpense(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/addExpense.php",info)
      .map((response: Response)=> response.json());
  }

  addExpense_credit(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/addExpense_credit.php",info)
      .map((response: Response)=> response.json());
  }

  // register_expense(info){
  //   return this.http.post("http://localhost/~abshirjama/techsom-improved/register_expense.php",info)
  //     .map((response: Response)=> response.json());
  // }

  register_expense(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/register_expense.php",info)
      .map((response: Response)=> response.json());
  }

  updateEmployee(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/dayn_up_update.php?",info)
      .map(()=>"");
  }

  pay(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/dayn_pay.php?",info)
      .map(()=>"");
  }

  deleteEmployee(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/dayn_delete.php",info)
      .map(()=>"");
  }

  delete_Employee(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/employee_delete.php",info)
      .map(()=>"");
  }


  delete_expense(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/expense_delete.php",info)
      .map(()=>"");
  }

  delete_expense_inner(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/expense_delete_inner.php",info)
      .map(()=>"");
  }

  getEmployee(id){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/dayn_up.php",id)
      .map(res=>res.json());
  }

  getExpense(id){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/get_expense.php",id)
      .map(res=>res.json());
  }

  singledayn(id){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/dayn_single.php",id)
      .map((response: Response)=> response.json());
  }

  da(): Observable<any> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/da.php').map((response: Response)=><dayn[]>response.json());
  }

  am(): Observable<any> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/am.php').map((response: Response)=><dayn[]>response.json());
  }

  ca(): Observable<any> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/am.php').map((response: Response)=><dayn[]>response.json());
  }

  gethistory(): Observable<history[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/history.php').map((response: Response)=><history[]>response.json());
  }

  get_expenses(): Observable<expenses_major[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/expenses.php').map((response: Response)=><expenses_major[]>response.json());
  }

  getDir(): Observable<directory[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/directory.php').map((response: Response)=><directory[]>response.json());
  }

  getnotes(): Observable<notes[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/notes.php').map((response: Response)=><notes[]>response.json());
  }

  addnote(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/note.php",info)
      .map((response: Response)=> response.json());
  }

  initial_register(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/initial.php",info)
      .map((response: Response)=> response.json());
  }

  bal(): Observable<any> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/balance_overall.php').map((response: Response)=><any>response.json());
  }

  register_com(info): Observable<any>{
    return this.http.post("http://localhost/~abshirjama/techsom-improved/com.php",info)
      .map((response: Response)=> response.json());
  }

  authenticatenow(info): Observable<any> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/balance_overall.php', info).map((response: Response)=><any>response.json());
  }

  cashs_depo(): Observable<cash[]> {
    return this.http.get('http://localhost/~abshirjama/techsom-improved/cash_depo.php').map((response: Response)=><cash[]>response.json());
  }

  updatepassword(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/reset.php?",info)
      .map(()=>"");
  }

  updatepassword_employee(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/reset_employee.php?",info)
      .map(()=>"");
  }

  register_employee(info){
    return this.http.post("http://localhost/~abshirjama/techsom-improved/register_employee.php?",info)
      .map(()=>"");
  }

}
