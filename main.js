document.addEventListener("DOMContentLoaded", function() {
    const cname = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const healthConditions = document.querySelectorAll('input[name="healthCondition"]');
    const habits = document.querySelectorAll('input[name="habits"]');
    const bHabits = document.querySelectorAll('input[name="bhabits"]');
    const resultInput = document.getElementById("result");

    // Calculate the risk score
    function calculateRiskScore() {
        let riskScore = 500;

        // Calculate age-based score
        const age = parseInt(ageInput.value);
        if (age <= 18) {
            riskScore += 0;
        } else if (age > 18 && age <= 25) {
            riskScore += riskScore * 0.1;
        } else if (age >= 26 && age <= 35) {
            riskScore += riskScore * 0.3;
        } else if (age >= 36 && age <= 45) {
            riskScore += riskScore * 0.6;
        } else if (age >= 46 && age <= 55) {
            riskScore += riskScore * 1;
        } else if (age >= 56 && age <= 65) {
            riskScore += riskScore * 1.5;
        } else {
            riskScore += riskScore * 2.1;
        }

        // Calculate health condition score
        healthConditions.forEach(function(healthCondition) {
            if (healthCondition.checked) {
                riskScore += riskScore * 0.01;
            }
        });

        // Calculate habits score
        habits.forEach(function(habit) {
            if (habit.checked) {
                if (habit.value === "Regular Exercise") {
                    riskScore -= riskScore * 0.05;
                } else {
                    riskScore += riskScore * 0.05;
                }
            }
        });

        // Calculate bad habits score
        bHabits.forEach(function(bHabit) {
            if (bHabit.checked) {
                if (bHabit.value === "irRegular Exercise") {
                    riskScore += riskScore * 0.05;
                } else {
                    riskScore -= riskScore * 0.05;
                }
            }
        });

        // Display the calculated risk score
        resultInput.textContent = (parseFloat(riskScore)).toFixed(2);
        document.getElementById("hello").textContent = `Hello ${cname.value}!`;
    }

    // Update the event listener for the age input
    ageInput.addEventListener("input", calculateRiskScore);

    // Update the event listener for the name input
    cname.addEventListener("change", calculateRiskScore);

    // Update results onchange to relevant form elements
    healthConditions.forEach(function(healthCondition) {
        healthCondition.addEventListener("change", calculateRiskScore);
    });

    habits.forEach(function(habit) {
        habit.addEventListener("change", calculateRiskScore);
    });

    bHabits.forEach(function(bHabit) {
        bHabit.addEventListener("change", calculateRiskScore);
    });

    // Initially calculate and display the risk score
    calculateRiskScore();
});
