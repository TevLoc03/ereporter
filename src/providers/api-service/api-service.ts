import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  public data;
	url: string = 'http://www.webngraf.com/api';

  constructor(public http: Http) {
    console.log('Hello ApiServiceProvider Provider');
  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
		
		options = new RequestOptions();
		options.headers = new Headers();

		options.headers.append('Content-Type', 'application/json');

		// Support des paramËtres GET
		if (params) {
			let p = new URLSearchParams();
			for (let k in params) {
				p.set(k, params[k]);
			}

			options.search = !options.search && p || options.search;
		}

		return this.http.get(this.url + '/' + endpoint, options);
  }
  
	post(endpoint: string, valPost?: any) {
		
		//options = new RequestOptions();
		//options.headers = new Headers();
		var headers = new Headers();
		//headers.append('Content-Type', 'application/json');
		return this.http.post(this.url + '/' + endpoint, valPost);
	}


}