// LAB 05 - JS MODULES

// app.js
import times, { embiggen, decreasify, addAndLogUpper, getMaxAndMultAndLogUpper } from './mathModule.js';
import { toWhisperCase, toShoutyCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

import lstr from './output.js';


export function do_task(task_id, input_val_1, input_val_2, output_div) {

    // MAKE RETURN OUTPUT TEXT
    console.log(`DOING TASK ${task_id}`);

    var resText = "";

    switch (task_id) {
        case 1:
            // NOTHING, NOT CALLED, PLACEHOLDER
            break;

        case 2:
            // MATH STUFF

            // GET NUMS
            const num_1 = parseInt(input_val_1);
            const num_2 = parseInt(input_val_2);

            resText += lstr(`Add ${num_1} to ${num_2} is`, embiggen(num_1, num_2));
            resText += lstr(`Subtract ${num_2} from ${num_1} is`, decreasify(num_1, num_2));
            resText += lstr(`Subtract ${num_1} from ${num_2} is`, decreasify(num_2, num_1));
            break;

        case 3:
            // STRING STUFF            
            resText += lstr(`Uppercase ${input_val_1} is`, toShoutyCase(input_val_1));
            resText += lstr(`Lowercase ${input_val_1} is`, toWhisperCase(input_val_1));
            break;

        case '4a':
            // IMPORTING AND USING, ADD AND STRING UPPER
            // 4a ADD
            {
                const num_1 = parseInt(input_val_1);
                const num_2 = parseInt(input_val_2);

                resText += lstr(`Add ${num_1} to ${num_2}`, embiggen(num_1, num_2));
            }
            break;

        case '4b':
            // IMPORTING AND USING, ADD AND STRING UPPER
            // 4b UPPERCASE
            resText += lstr(`Make ${input_val_1} Uppercase`, toShoutyCase(input_val_1));
            break;

        case 5:
            // DEFAULT, MULTIPLY
            {
                const num_1 = parseInt(input_val_1);
                const num_2 = parseInt(input_val_2);
                resText += lstr(`Multiply ${num_1} by ${num_2} is`, times(num_1, num_2));
            }
            break;


        case 6:
            // ARRAY STUFF
            {
                const arr = input_val_1.split(',');

                resText += lstr(`Max value of ${arr} is`, findMax(arr));
                resText += lstr(`Reversed ${arr} is `, reverseArray(arr));
            }
            break;


        case 7:
            // COMBINE FUNCTIONS
            // ADD AND LOG UPPER
            {
                const num_1 = parseInt(input_val_1);
                const num_2 = parseInt(input_val_2);

                resText += lstr(`AddAndLogUpper ${num_1} to ${num_2}`, addAndLogUpper(num_1, num_2));
            }
            break;


        case 8:
            // COMBINE ARRAY STUFF
            {
                // BRACKETS TO ALLOW SAME NAMESPACE FOR ARR
                const arr = input_val_1.split(',');
                const mult_num = parseInt(input_val_2);
                resText += lstr('MultAndLogUpper is ', getMaxAndMultAndLogUpper(arr, mult_num));
            }
            break;
    }

    // SET TEXT ON OUTPUT DIV & LOG
    output_div.innerText = resText;

    // LOG IT
    console.log(resText)
}