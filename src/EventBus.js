import mitt from 'mitt';

const bus = mitt();
bus.$on = bus.on;
bus.$off = bus.off;
bus.$emit = bus.emit;

export default { bus };
