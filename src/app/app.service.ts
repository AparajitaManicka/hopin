import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  _baseUrl = 'http://localhost:7000';
  res: Array<Object>;
  currentUser: string;
  currentUserId: string;

  constructor(private http: Http) { }

  registerNewUser(userData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(this._baseUrl + "/signupuser", userData, { headers: headers })
      .subscribe(response => this.res = response.json())
  }

  registerNewRide(rideDetails) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log("New ride offered:" + JSON.stringify(rideDetails))

    this.http.post(this._baseUrl + "/offeraride", rideDetails, { headers: headers })
      .subscribe(
        response => this.res = response.json())

  }

  authenticateUser(username, password) {
    this.currentUser = username;
    let headers = new Headers();
    headers.append('username', username);
    headers.append('password', password);
    /*return this.http.post(this._baseUrl + "/authlogin", {headers:headers})
      .map((response: Response) => <any[]>response.json())
*/
  }



  ridesOffered(): Observable<any> {
    return this.http.get(this._baseUrl + "/getridesoffered/" + this.currentUserId)
      .map((response: Response) => <any[]>response.json())
  }

  ridesTravelled(): Observable<any> {
    return this.http.get(this._baseUrl + "/getridestravelled/" + this.currentUserId)
      .map((response: Response) => <any[]>response.json())
  }

  getUserId(username): Observable<any> {
    console.log("CALLiNG to get userid "+username)
    return this.http.get(this._baseUrl + "/getuserid/" + username)
      .map((response: Response) => <any[]>response.json())
  }

  deleteride(cancelride) {
    console.log("DELETE Ride:" + cancelride)
    return this.http.post(this._baseUrl + "/deleteofferedride", cancelride)
      .map((response: Response) => <any[]>response.json())
  }

  deletetravel(cancelride) {
    console.log("DELETE Ride:" + cancelride)
    return this.http.post(this._baseUrl + "/deletetravelledride", cancelride)
      .map((response: Response) => <any[]>response.json())
  }

  searchRides(from, to, date) {
    return this.http.get(this._baseUrl + "/api/bookaride/" + from + "/" + to + "/" + date)
      .map((response: Response) => <any[]>response.json())
  }

  bookRide(ride) {
    return this.http.post(this._baseUrl + "/api/reserveaseat", ride)
      .map((response: Response) => <any[]>response.json())
  }

  confirmTransaction(confirmTransaction)
  {
    return this.http.post(this._baseUrl + "/api/userconfirm", confirmTransaction)
      .map((response: Response) => <any[]>response.json())
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
} 