import Daemon from '../js/Daemon';

test('attack without stoned effect', () => {
    const daemon = new Daemon('Sauron', 100);
    daemon.distance = 3;
    expect(daemon.attack).toBe(80);
});

test('attack with stoned effect', () => {
    const daemon = new Daemon('Sauron', 100);
    daemon.distance = 3;
    daemon.stoned = true;
    expect(daemon.attack).toBe(75);
});
