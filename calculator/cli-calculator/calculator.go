package main

import (
    "flag"
    "fmt"
    "os"
    "math"
)

func main() {
    add := flag.Bool("add", false, "Add two numbers")
    subs := flag.Bool("subtract", false, "Subtract two numbers")
    mult := flag.Bool("multiply", false, "Multiply two numbers")
    div := flag.Bool("divide", false, "Divide two numbers")
    mod := flag.Bool("mod", false, "Mod/Remainder of two numbers")
    pow := flag.Bool("pow", false, "Power of numbers")

    flag.Parse()

    var a, b int
    fmt.Println("Enter 1st Number: ")
    fmt.Scan(&a)
    fmt.Println("Enter 2nd Number: ")
    fmt.Scan(&b)

    switch {
    case *add:
        fmt.Printf("Additon: %d \n", addition(a, b))
    case *subs:
        fmt.Printf("Difference: %d \n", subtract(a, b))
    case *mult:
        fmt.Printf("Product: %d \n", multiply(a, b))
    case *div:
        fmt.Printf("Division: %d \n", division(a, b))
    case *mod:
        fmt.Printf("Mod/Remainder: %d \n", int(remainder(float64(a), float64(b))))
    case *pow:
        fmt.Printf("1st number to the power of 2nd number: %d \n", int(power_of(float64(a), float64(b))))
    default:
        fmt.Fprintln(os.Stderr, "Wrong option try with the options available")
        os.Exit(1)
    }
}

func addition(a int, b int) int {
    return a + b
}

func subtract(a int, b int) int {
    return a - b
}

func multiply(a int, b int) int {
    return a * b
}

func division(a int, b int) int {
    return a / b
}

func remainder(a float64, b float64) float64 {
    return math.Mod(a, b)
}

func power_of(a float64, b float64) float64 {
    return math.Pow(a, b)
}
