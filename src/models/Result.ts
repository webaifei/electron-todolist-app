import { ResultType } from './../enum/resultTypeEnum';
export default class Result<T> {
  code: number;
  msg: string | null;
  data: T;
  constructor(code: number = ResultType.OK, msg: string|null = '', data: T) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  static success<T>(data: T): Result<T> {
    return new Result(ResultType.OK, 'ok', data);
  }
}