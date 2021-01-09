/**
 * Gets element by ID
 * @param {string} id ->id Selector
 */
const getElementById = (id) => document.getElementById(id);

/**
 * Gets Element by class name
 * @param {string} calssName -> Class selector
 */
const getElementByClassName = (calssName) => document.getElementsByClassName(calssName);

/**
 * Unsets the Alert Message
 * @param {boolean} made_alert -> default false
 */
const unset_alert = (made_alert = false) => {
    if (made_alert) {
        setInterval(() => {
            elements.APP_ALERT.classList.replace('d-block', 'd-none');
        }, 5000);
    }
}

const alert = (type, message) => {
    const { APP_ALERT, APP_APERT_MESSAGE } = elements;
    APP_APERT_MESSAGE.innerText = message;
    switch (type.toLowerCase()) {
        case 'success':
            APP_ALERT.classList.replace('alert-danger', 'alert-success');
            break;
        case 'error':
            APP_ALERT.classList.replace('alert-danger', 'alert-success');
            break;
        default:
            APP_ALERT.classList.replace('alert-success', 'alert-warning');
    }
    APP_ALERT.classList.replace('d-none', 'd-block');
    unset_alert(true);
}

const
    elements = {
        APP_NO_INTERNET: getElementById('APP_NO_INTERNET'),
        APP_ALERT: getElementById('APP_ALERT'),
        APP_APERT_MESSAGE: getElementById('APP_APERT_MESSAGE'),
        CALCULATOR_SETTINGS: getElementById('CALCULATOR_SETTINGS'),
        STORAGE_PROFIT_MINIMUM: getElementById('STORAGE_PROFIT_MINIMUM'),
        STORAGE_PROFIT_MAXIMUM: getElementById('STORAGE_PROFIT_MAXIMUM'),
        STORAGE_TAX_PERCENT: getElementById('STORAGE_TAX_PERCENT'),
        STORAGE_CALCULATOR_SETTINGS_SAVE: getElementById('STORAGE_CALCULATOR_SETTINGS_SAVE'),
        STORAGE_CALCULATOR_SETTINGS_CANCEL: getElementById('STORAGE_CALCULATOR_SETTINGS_CANCEL'),
        CALCULATOR_SETTINGS_TRIGGER: getElementById('CALCULATOR_SETTINGS_TRIGGER'),
        INPUT_QUANTITY: getElementById('INPUT_QUANTITY'),
        INPUT_UNIT_PRICE: getElementById('INPUT_UNIT_PRICE'),
        INPUT_RANGE: getElementById('INPUT_RANGE'),
        INPUT_ADD: getElementById('INPUT_ADD'),
        INPUT_CANCEL: getElementById('INPUT_CANCEL'),
        INPUT_TABLE: getElementById('INPUT_TABLE'),
        INPUT_TABLE_ELEMENMTS: getElementById('INPUT_TABLE_ELEMENMTS'),
        INPUT_TABLE_DELETE: getElementByClassName('INPUT_TABLE_DELETE'),
        CALCULATION_BLOCK: getElementById('CALCULATION_BLOCK'),
        CALCULATE_BILL: getElementById('CALCULATE_BILL'),
        CALCULATE_BILL_RESET: getElementById('CALCULATE_BILL_RESET'),
        BILL_TOTAL: getElementById('BILL_TOTAL'),
        BILL_TAXABLE_AMOUNT: getElementById('BILL_TAXABLE_AMOUNT'),
        BILL_VAT_PERCENTAGE: getElementById('BILL_VAT_PERCENTAGE'),
        BILL_VAT_AMOUNT: getElementById('BILL_VAT_AMOUNT'),
        BILL_GRAND_TOTAL: getElementById('BILL_GRAND_TOTAL'),
        BILL_CALCULATOR_CANCEL: getElementById('BILL_CALCULATOR_CANCEL'),
    }

export {
    elements,
    getElementByClassName as Class,
    getElementById as Id,
    alert
}