import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerSearchResponse, PlayerStatResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
    private apiUrl = 'http://lookup-service-prod.mlb.com';
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }
    
    getPlayer(): Observable<PlayerSearchResponse> {
        return this.http.get<PlayerSearchResponse>(this.apiUrl + "/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='arenado%25'");
    }

    getPlayerStats(id: string): Observable<PlayerStatResponse> {
        return this.http.get<PlayerStatResponse>(this.apiUrl + "/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id=" + id)
    }
}