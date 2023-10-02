import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {


  
  apiURL = 'https://api-cv-service-jorgeaveraf.cloud.okteto.net/certificates';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }

  getCertification(): Observable<any> {
    return this.http.get<any>(this.apiURL, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
 // Get client-side error
 errorMessage = error.error.message;
}
else {
  // Get server-side error
  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
}
window.alert(errorMessage);
return throwError(errorMessage);
  }
  


}