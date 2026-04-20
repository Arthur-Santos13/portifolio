import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    // Ponta da API Spring Boot — troque pela URL real quando deployed
    private readonly apiUrl = 'https://api.arthur-santos.dev/api/contact';

    constructor(private http: HttpClient) { }

    send(payload: ContactPayload): Observable<any> {
        return this.http.post(this.apiUrl, payload);
    }
}
