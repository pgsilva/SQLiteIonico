import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private db: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  openDatabase() {
    return this.db.create({
      name: 'cliente.db',
      location: 'default'
    });
  }

  createDatabase() {
    return this.openDatabase().
      then((db: SQLiteObject) => {
        this.createTabelaClientes(db);
      });
  }

  createTabelaClientes(db: SQLiteObject) {
    let sql: string = 'CREATE TABLE IF NOT EXISTS cliente (id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      'nome VARCHAR(200), fone VARCHAR(200), email VARCHAR(200))'
    db.executeSql(sql, {}); //{poderia conter parametros, por isso o {}}
  }

}
