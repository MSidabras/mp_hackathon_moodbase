import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class AbstractHttpService {

  public getUrl(url: string, params?: Map<string, string>) {
    let result = url;
    params && params.size > 0 && params.forEach((v, k) => result = result.replace(`{${k}}`, v));
    return result;
  }

  protected handlerError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(`An error occurred: ${error.error.message}`);
    } else {

      console.log(error);

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      error.status &&
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    let msg = (error.error && error.message) ? `${error.error}: ${error.message}`
      : (error || 'Something bad happened; please try again later');

    return throwError(msg);
  }
}
