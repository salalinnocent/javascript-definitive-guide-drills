#recursion
#base case
#or the other case inductive step break the problem into similar other problem

#FIBANACI NUMBERS

def fib(x):
    #two base cases
    if x == 0 or x == 1:
     return 1
    else:
       #thats why two solution for problems
       return fib(x-1) + fib(x-2)