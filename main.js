document.addEventListener("DOMContentLoaded", function() {
    const ageInput = document.getElementById("age");
    const healthConditions = document.querySelectorAll('input[name="healthCondition"]');
    const habits = document.querySelectorAll('input[name="habits"]');
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

        // Display the calculated risk score
        resultInput.textContent = (parseFloat(riskScore)).toFixed(2);
    }

    // Update the event listener for the age input
    ageInput.addEventListener("input", calculateRiskScore);

    // Update results onchange to relevant form elements
    healthConditions.forEach(function(healthCondition) {
        healthCondition.addEventListener("change", calculateRiskScore);
    });

    habits.forEach(function(habit) {
        habit.addEventListener("change", calculateRiskScore);
    });

    // Initially calculate and display the risk score
    calculateRiskScore();
});

