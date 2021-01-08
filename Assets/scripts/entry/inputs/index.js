import { elements } from '../../elements/index.js';
import Database from '../../database/index.js';
const {
    INPUT_ADD, INPUT_CANCEL,
    INPUT_QUANTITY, INPUT_UNIT_PRICE,
    INPUT_RANGE,
    INPUT_TABLE, INPUT_TABLE_ELEMENMTS,
    CALCULATE_BILL_RESET, INPUT_TABLE_DELETE
} = elements;


let
    inputs = [],
    input_Id = 0;

export default class InputManager extends Database {
    constructor() {
        super(Database);
        this.min = parseFloat(this.getItem('MINIMUM_PROFIT'));
        this.max = parseFloat(this.getItem('MAXIMUM_PROFIT'));
        this.tax = parseFloat(this.getItem('TAX_PERCENT'));
        this.initialize();
    }

    /**
     * Initializes the project
     */
    initialize = () => {
        this.clear_trigger;
        this.add_to_array;
        this.reset_tabel;
        if (inputs.length != 0) this.show_table(true);
    }

    /**
     * Adds the input value to inputs array
     */
    add_to_array = INPUT_ADD.addEventListener('click', () => {
        if (INPUT_QUANTITY.value.length != 0 && INPUT_UNIT_PRICE.value.length) {
            // Check if range true than add random %, tax % and calculate total else tax % and multiplication

            // Get Added amount with add percentage
            let profit_info = INPUT_RANGE.checked ? this.add_range_profit(INPUT_UNIT_PRICE.value) : null;

            // Add profit percentage if range checked elese normal input
            let units_with_profit = INPUT_RANGE.checked ? profit_info.amount : INPUT_UNIT_PRICE.value;

            let reduced_percent = parseFloat(`1.${this.tax}`);
            let reduced_price = parseFloat((parseFloat(INPUT_UNIT_PRICE.value) / reduced_percent).toFixed(2));

            // Add Tax% and calculate total if Range Checked else reduce tax
            let units_with_tax = INPUT_RANGE.checked ? this.add_tax(units_with_profit).amount : reduced_price;

            let CALCULATED_PRICE = parseFloat(units_with_tax.toFixed(2));
            let QUANTITY = parseFloat(INPUT_QUANTITY.value);

            inputs.push({
                INDEX: input_Id,
                IDENTITY: `ITEM_ID_${++input_Id}`,
                QUANTITY,
                INPUT_PRICE: parseFloat(INPUT_UNIT_PRICE.value),
                CALCULATED_PRICE,
                PROFIT_PERCENTAGE: INPUT_RANGE.checked ? profit_info.percentage : 0,
                TAX_PERCENTAGE: units_with_tax.percentage,
                TOTAL_AMOUNT: this.calculate_units_total(QUANTITY, CALCULATED_PRICE),
                RANGE: INPUT_RANGE.checked ? "Yes" : "NO"
            })

        }
        this.reset_Inputs();
        // Trigger Add to Dom Event and Show The Table in dom if the length of the inputs array is greater than 0
        this.populate_table();
    });

    /**
     * Populates tabel
     */
    populate_table = () => {
        const condition = inputs.length != 0;
        if (condition) {
            INPUT_TABLE_ELEMENMTS.innerHTML = "";
            let count = 1;
            inputs.forEach(element => {
                INPUT_TABLE_ELEMENMTS.innerHTML += `
                    <tr id="${element.IDENTITY}">
                        <th scope="row">${count++}</th>
                        <td>${element.QUANTITY}</td>
                        <td>${element.INPUT_PRICE}</td>
                        <td>${element.CALCULATED_PRICE}</td>
                        <td>${element.TOTAL_AMOUNT}</td>
                        <td>${element.PROFIT_PERCENTAGE}</td>
                        <td>${element.RANGE}</td>
                        <td> <button type="button" class="btn btn-sm btn-danger INPUT_TABLE_DELETE">
                        <i class="fas fa-trash"></i></button> </td>
                    </tr>
                `;
            });
        }
        // If array length is not 0 show else dont show
        this.show_table(condition);
        // Triggers after the table gets populated
        this.remove_table_deleted();
    }

    /**
     * Resets the tabel and inputs array as well
     */
    reset_tabel = CALCULATE_BILL_RESET.addEventListener('click', () => {
        INPUT_TABLE_ELEMENMTS.innerHTML = "";
        inputs = [];
        this.populate_table();
    });

    /**
     * Show Hide Table
     * @param {boolean} show 
     */
    show_table(show = false) {
        if (show)
            INPUT_TABLE.classList.replace('d-none', 'd-block')
        else
            INPUT_TABLE.classList.replace('d-block', 'd-none')
    }

    /**
     * Extracts index
     * @param {string} index_key 
     */
    index_extractor = (index_key) => inputs.indexOf(index_key);

    /**
     * Remove the Delet table from list
     */
    remove_table_deleted = () => {
        for (let index = 0; index < INPUT_TABLE_DELETE.length; index++) {
            const element = INPUT_TABLE_DELETE[index];
            element.addEventListener('click', (trigger) => {
                const removable_element = element.parentElement.parentElement;
                const removable_index = this.index_extractor(removable_element.id);
                inputs.splice(removable_index, 1);
                removable_element.remove();
                this.populate_table();
            });
        }
    }

    /**
     * Calculate total multiplying qty and units
     * @param {number} qunatity 
     * @param {number} units 
     */
    calculate_units_total = (qunatity, units) => parseFloat((qunatity * units).toFixed(2));

    /**
     * Factory to calculate addition amount
     * @param {number} units 
     */
    addition_facetory = (units) => {
        /**
         * Percentage to add
         *  @param {number} percentage 
         */
        return (percentage) => {
            let addable_amount = (units * percentage) / 100;
            return {
                percentage,
                amount: units + addable_amount
            };
        }
    }

    /**
     * Adds up Tax and returns to units
     * @param {number} units 
     */
    add_tax = (units) => this.addition_facetory(parseFloat(units))(this.tax);

    /**
     * Calculate Profit amount from random range
     * @param {number} units 
     */
    add_range_profit = (units) => this.addition_facetory(parseFloat(units))(parseFloat((this.random_range())));

    /**
     * Get the Random Number between maximum and minimum profit range
     */
    random_range = () =>
        (Math.random() * (this.max - this.min) + this.min).toFixed(2);

    /**
     * Returns all the inputs array
     */
    get_All_Inputs = inputs;

    /**
     * Helps to clearout the inputs when clear triggers
     */
    clear_trigger = INPUT_CANCEL.addEventListener('click', () => this.reset_Inputs());

    /**
     * Resets Input
     */
    reset_Inputs() {
        INPUT_QUANTITY.value = "";
        INPUT_UNIT_PRICE.value = "";
        INPUT_RANGE.checked = false;
    }
}