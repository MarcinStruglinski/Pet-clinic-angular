import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  doLogin(login: string, password: string) {
    console.log("POST")
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded'
      })
    };
    const postData = `username=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}&submit`;

    return this.http.post('http://localhost:9000/api/v1/authenticate', postData, httpOptions);
  }

}

