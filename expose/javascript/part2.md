# CSE 110 Lab 4: JavaScript Part 2

1. The output on line 12 will be prices.length because i is declared as var, which can be accessed anywhere inside the function. Var i will be incremented until it reaces prices.length, which will be 3.
   
2. The output on line 13 will be the value from the last index of array prices, with a discount applied to it. For this example, the output is 150.
   
3. The output on line 14 will be the last updated value of the variable finalPrice, which can be accessed inside the function because it is declared as a var. In this case, the console would output 150.

4. The function will return the array 'discounted' which holds all the item prices with the discount applied to it. In this case it will return [50, 100, 150].

5. Line 12 will produce an error because the variable 'i' is not accessible outside of the scope of the for loop unless it has been declared again.

6. Line 13 will produce an error because the variable 'discountedPrice' is not accessible out of the scope of the for loop unless it has been declared again.

7. The output on line 14 will be the last updated value of the variable finalPrice, which can still be accessed inside the function because it is declared using let. In this case, the console would output 150.

8. The function will return the array 'discounted' which holds all the item prices with the discount applied to it. In this case it will return [50, 100, 150].

9. Line 11 will produce an error because the variable 'i' is not accessible outside of the scope of the for loop since it is declared using let.

10. The output on line 12 will be the length of the array 'prices', which in this case is 3. It has been set to the length of the array.

11. The function will return the array 'discounted' which holds all the item prices with the discount applied to it. In this case it will return [50, 100, 150].

12. - A: student.name
    - B: student['Grad Year']
    - C: student.gteeting()
    - D: student['Favorite Teacher'].name
    - E: student.courseLoad[0]

13. - A: '**32**' because 3 is a string and it adds 2 as a string to create '32'.
    - B: **1** because string '3' becomes a number 3 - 2 = 1.
    - C: **3** because null has no value so the output remains 3.
    - D: '**3null**' because '3' is a string and it concatenates 'null' to the end.
    - E: **4** because true maps to 1 and 1 + 3 = 4.
    - F: **0** because false maps to 0 and null has no value so the output remains 0.
    - G: '**3undefined**' because '3' is a string and it concatenates 'undefined' to the end.
    - H: **NaN** because undefined cannot be represented by a number, hence NaN.

14. - A: **true** because the number representation of '2' is greater than 1.
    - B: **false** because the first characters are compared when comparing strings, and 2 > 1 so this is false.
    - C: **true** because '2' is converted into the number 2 and 2 = 2 so true.
    - D: **false** because === checks for equal types and this compares a string with a number.
    - E: **false** because true maps to 1 and 1 != 2.
    - F: **true** because Boolean(2) becomes true and true === true (same value and type).

15. While both operators compare whether two values are equal, the === operator goes further and checks that the two values being compared are of the same type as well.

17. (Number 17) If the function modifyArray is called with the given parameters, the function would return an array holding [2, 4, 6]. When the array and doSomething are passed into modifyArray, modifyArray iterates through the given array and for each of the values, it calls doSomething with the value as the parameter. In this case, doSomething doubles the given value. So, all values in the given array are doubled and passed back as [2, 4, 6].

19. (Number 19) 1 4 3 2