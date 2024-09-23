import Magician from '../js/Magician';

test('attack without stoned effect', () => {
    const magician = new Magician('Gandalf', 100);
    magician.distance = 2;
    expect(magician.attack).toBe(90);
});

test('attack with stoned effect', () => {
    const magician = new Magician('Gandalf', 100);
    magician.distance = 2;
    magician.stoned = true;
    expect(magician.attack).toBe(85);
});
