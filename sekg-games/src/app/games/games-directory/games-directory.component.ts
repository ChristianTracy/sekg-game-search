import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-games-directory',
  templateUrl: './games-directory.component.html',
  styleUrls: ['./games-directory.component.scss'],
  providers: [ApiService],
})
export class GamesDirectoryComponent implements OnInit {
  games: Array<any>;
  loading: Boolean;
  constructor(private apiService: ApiService) {
    this.games = [];
    this.loading = false;
  }

  cleanGames() :void {
    this.games = [];
  }

  startLoading() :void {
    this.loading = true;
  }

  finishLoading() :void {
    this.loading = false;
  }


  finishSearchHandler = (games: Array<any>) => {
    this.finishLoading();
    this.games = games;
  } 

  errorHandler = (error: Object) => {
    this.finishLoading();
    this.games = [];
    console.log(error);   
  }

  searchHandler(query: string) :void {
    if (!query) return;
    this.cleanGames();
    this.startLoading();
    this.apiService.searchGames(query)
      .subscribe(this.finishSearchHandler, this.errorHandler);
  }

  ngOnInit(): void {
  }

}
