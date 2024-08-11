#Computational Thinking 
#Object-Oriented-Programming 

my_tuple = (1, 2, 3, 'a', 'b', 'c')

# Accessing elements of a tuple
print(my_tuple[:5])  # Output: 1
print(my_tuple[:3])  # Output: 'a'

# Iterating over a tuple
for item in my_tuple:
    print(item)

# Length of a tuple
print(len(my_tuple))  # Output: 6


my_tube = (1,2,3, 'a', 'b', 'c')

print(my_tube[3])


sumDigits = 0
for c in str(1962):
    sumDigits += int(c)
print(sumDigits)

banner_user = ['harry', 'mark', 'chris', 'mac']
user = 'marie'
if user not in banner_user:
    print(f"{user.title()}, you cannot post here")

def sqrt(x):
    ans = 0
    if x >= 0:
        while ans*ans < x: ans = ans + 1
        if ans*ans != x:
            print(x),
            return None
        else: return ans
    else:
        print(x),
        return None
def f(x):
    x = x + 1
    return x

def find_max(arr):
    max_element = arr[0]
    for element in arr:
        if(element > max_element):
            max_element = element
    return max_element #now I know why people mock you
        
       

my_list = [1,2,3,4,5,6] 
message = f"{find_max(my_list)}"
print(message)
