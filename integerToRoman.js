/**
 * @param {number} num
 * @return {string}
 */
export function  intToRoman (num) {
    const symbol = [
        {
            text: 'M',
            value: 1000
        },
        {
            text: 'CM',
            value: 900
        },
        {
            text: 'D',
            value: 500
        },
        {
            text: 'CD',
            value: 400
        },
        {
            text: 'C',
            value: 100
        },
        {
            text: 'XC',
            value: 90
        },
        {
            text: 'L',
            value: 50
        },
        {
            text: 'XL',
            value: 40
        },
        {
            text: 'X',
            value: 10
        },
        {
            text: 'IX',
            value: 9
        },
        {
            text: 'V',
            value: 5
        },
        {
            text: 'IV',
            value: 4
        },
        {
            text: 'I',
            value: 1
        }
    ]
    
    let roman = []
    if (num >= 1 && num <= 3999) {
        for (let i = 0; i < symbol.length; i++) {
            if (num >= symbol[i].value) {
                let count = Math.floor(num/symbol[i].value)
                num -= symbol[i].value * count
                while (count > 0) {
                    roman.push(symbol[i].text)
                    count--
                }
            }
        }
    }
    
    return roman.join('') 
};

