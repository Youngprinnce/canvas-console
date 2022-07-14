import * as factory from './factory';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const command = () => {
    rl.question("Enter command: ", function(values) {
        if (values === 'Q') {
            rl.close();
        } else {
            factory.runCommands(values);
            command();
        }
    });
}

command();