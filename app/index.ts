import { readLineConsole } from "./helpers/Console";
import { Table } from "./Table";

import { Show } from "./commands/Show";
import { User } from "./commands/User";
import { Date } from "./commands/Date";
import { Important } from "./commands/Important";
import { Sort } from "./commands/Sort";

class App {
    constructor() { }
    static table: Table;

    public static start() {
        App.table = new Table(process.cwd(), new Show());
        App.table.setTodoCollectionToContext();

        console.log('Please, write your command!');
        readLineConsole(this.processCommand);
    }

    public static processCommand(command: string) {
        switch (true) {
            case Boolean(/exit/.exec(command)):
                process.exit(0);
                break;
            case Boolean(/show/.exec(command)):
                App.table.setContext(new Show());
                App.table.sort();
                App.table.show();
                break;
            case Boolean(/important/.exec(command)):
                App.table.setContext(new Important());
                App.table.show();
                break;
            case Boolean(/sort\s(importance)*(user)*(date)*/.exec(command)):
                App.table.setContext(new Sort());
                App.table.sort(command);
                App.table.show();
                break;
            case Boolean(/user/.exec(command)):
                App.table.setContext(new User());
                App.table.show();
                break; 
            case Boolean(/date\s*(\d{4}(\-\d{2}(\-\d{2})*)*)*/.exec(command)):
                App.table.setContext(new Date());
                App.table.show(); 
                break;
            default:
                console.log('wrong command');
                break;
        }
    }
}

App.start()


// TODO you can do it!