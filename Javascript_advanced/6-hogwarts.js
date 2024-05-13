function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += point;
    }

    return { 
        setName(newName) {
            name = newName;
            return name;
        },

        rewardStudent() {
            changeScoreBy(1);
        },

        penalizeStudent() {
            changeScoreBy(-1);
        },

        getScore() {
            return `${name}: ${privateScore}`
        }
    }
}

const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
