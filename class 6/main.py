# Variables & Data Types (https://www.youtube.com/watch?v=ng1qb8XsDeE&t=1s)
# 1) String   2) Integer   3) Boolean

# If Conditions  (https://www.youtube.com/watch?v=x6PM3tdgMMc)
# ==, < , > , >= , <= 

# Type casting
# int(), str(), bool()

# and | elif

# or | input



# name = input("Enter your name: ") 

# print(name)

# marks = int(input("Enter your perecentage: "))




# if marks > 40 and marks < 60:
#     print("Pass")
# else:
#     print("Fail")

# if   : first condition ke lie
# elif : ek se zyada condiions banane kelie  
# else : sari conditons false to ye chalega

# and  : ke andar dono condition true hona lazmi he
# or   : ke andar do me se koi bhi condition true ho ya dono true

# ==   : double equals to
# >
# <
# <=
# >=
# !=   : Not Equals : dono ek dusre ke equal nahi hone chaiye


# name1 = "Kashan"
# name2 = "Kashan"

# #     True
# if name1 != name2:
#     print("Hello")
# else:
#     print("Bye")






# IF means (agar)
# if is a keyword in (python)
# if condition:
#     code


# if 2 > 4: # False
#     print("Working")
# elif 4 > 6: # False
#     print("Yes")
# else:
#     print("Hello")


#  3 Inputs
#  1 input koi bhi num
#  2 input koi bhi 2 num
#  3 add, subtract, multiply, divide, exponent, modulus, floor division, 



num1 = int(input("Enter any random num: "))
num2 = int(input("Enter any random num2: "))
operator = input("add, subtract, multiply, divide, exponent, modulus, floor-division : ")

if operator == "add":
    print(num1 + num2)
elif operator == "subtract":
    print(num1 - num2)
elif operator == "multiply":
    print(num1 * num2)
elif operator == "divide":
    print(num1 / num2)
elif operator == "exponent":
    print(num1 ** num2)
elif operator == "modulus":
    print(num1 % num2)
elif operator == "floor-division":
    print(num1 // num2)
else:
    print("You have written the wrong operator")