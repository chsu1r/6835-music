setupUserInterface();

VELOCITY_THRESH = 300.0;
LAST_LEFT_HIT_MS = 0;
LAST_RIGHT_HIT_MS = 0;

Leap.loop(function(frame) {
    if (frame.hands.length > 1)
    {
        var left_hand = frame.hands[0];
        var left_velocity = left_hand.palmVelocity;
        var left_pos = left_hand.palmPosition;

        var right_hand = frame.hands[1];
        var right_velocity = right_hand.palmVelocity;
        var right_pos = right_hand.palmPosition;
        if (velocity_magnitude(left_velocity) > VELOCITY_THRESH && left_velocity[0] < -100) {
            if (register_hit(true)) {
                console.log(left_velocity, left_pos);
                $.post("/left_drum", {});
            }
        }
        if (velocity_magnitude(right_velocity) > VELOCITY_THRESH && right_velocity[0] < -100) {
            if (register_hit(false)) {
                console.log(right_velocity, right_pos);
            }
        }
        
    }
});

var register_hit = function(left) {
    var date = new Date();
    var new_ms = date.getMilliseconds() + date.getSeconds() * 60;
    if (left) {
        if (Math.abs(new_ms - LAST_LEFT_HIT_MS) > 250) {
            LAST_LEFT_HIT_MS = new_ms;
            return true;
        } else {
            LAST_LEFT_HIT_MS = new_ms;
            return false;
        }
    } else {
        if (Math.abs(new_ms - LAST_RIGHT_HIT_MS) > 250) {
            LAST_RIGHT_HIT_MS = new_ms;
            return true;
        } else {
            LAST_RIGHT_HIT_MS = new_ms;
            return false;
        }
    }
}
var velocity_magnitude = function(velocity) {
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1] + velocity[2] * velocity[2])
}