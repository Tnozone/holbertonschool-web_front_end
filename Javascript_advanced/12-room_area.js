const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    },
};

const unboundGetArea = roomDimensions.getArea;

const boundGetArea = unboundGetArea.bind(roomDimensions);