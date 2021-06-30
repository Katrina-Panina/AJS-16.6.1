import orderByProps from '../task';

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

test('The function works if you do not pass the props', () => {
  expect(() => orderByProps(obj)).not.toThrow();
});

test('The function returns the correct result', () => {
  const template = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['name', 'level'])).toEqual(template);
});
