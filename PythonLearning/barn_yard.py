
def solve(numLegs, numHeads):
    for numChicks in range(0, numHeads + 1):
        numPigs = numHeads - numChicks
        totLegs = 4 * numPigs + 2 * numChicks
        if totLegs == numLegs:
            return [numPigs, numChicks]
    return [None, None]

def barnYard(heads, legs):
    pigs, chickens = solve(legs, heads)
    if pigs == None:
        print('There is no solution')
    else:
        print('Number of pigs:', pigs)
        print('Number of chickens:', chickens)

def solve1(numLegs, numHeads):
    for numSpiders in range(0, numHeads + 1):
        for numChicks in range(0, numHeads - numSpiders + 1):
            numPigs = numHeads - numChicks - numSpiders
            totLegs = 4 * numPigs + 2 * numChicks + 8 * numSpiders
            if totLegs == numLegs:
                return [numPigs, numChicks, numSpiders]
    return [None, None, None]

def solve2(numLegs, numHeads):
    solutionFound = False
    for numSpiders in range(0, numHeads + 1):
        for numChicks in range(0, numChicks - numSpiders + 1):
            numPigs = numHeads - numChicks - numSpiders
            totLegs = 4*numPigs + 2*numChicks + 8*numSpiders
            if totLegs == numLegs:
                print('number of pigs:' + str(numPigs) + ',' ,)
                print('number of chickens:' + str(numChicks) + ',' ,)
                print('number of spiders:', numSpiders)
                solutionFound = True
    if not solutionFound: print('There is no solution')
# Ask for the number of heads and legs
heads = int(input('Enter number of heads: '))
legs = int(input('Enter number of legs: '))

# Call the barnYard function with the provided inputs
barnYard(heads, legs)
