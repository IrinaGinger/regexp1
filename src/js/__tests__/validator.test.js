import Validator from '../app';

// Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
// Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
test(('Валидатор выдает true, если выполняется условие'), () => { 
    const testName = 'Mag205-a_b';
    const validator = new Validator();
    expect(validator.validateUsername(testName)).toBe(true);
  });

  test(('Валидатор выдает false, если больше 3 цифр подряд'), () => { 
    const testName = 'Mag2055b';
    const validator = new Validator();
    expect(validator.validateUsername(testName)).toBe(false);
  });

  test(('Валидатор выдает false, если имя заканчивается на цифру'), () => { 
    const testName = 'Mag205';
    const validator = new Validator();
    expect(validator.validateUsername(testName)).toBe(false);
  });

  test(('Валидатор выдает false, если имя начинается на -'), () => { 
    const testName = '-Mag205a';
    const validator = new Validator();
    expect(validator.validateUsername(testName)).toBe(false);
  });

  test(('Валидатор выдает false, если в имени есть кириллица'), () => { 
    const testName = 'Маша';
    const validator = new Validator();
    expect(validator.validateUsername(testName)).toBe(false);
  });
