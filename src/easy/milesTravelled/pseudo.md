# Pseudo Code Solution

```text
    Divide minutes by 60 to get hours
    Multiply hours with speed
    If the decimal part of the above result is lower than 0.5
        then use Math.floor to round
    else
        use Math.ceil to round
    Return the result
```
