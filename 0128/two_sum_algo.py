# get gcd value from two number
# array = [3, 5, -4, 8, 11, 1, -1, 6]
#targetSum = 10
#return two number in array form that make target number


numbers= [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

def twoNumberSum(numbers, targetSum):

    x = len(numbers)
    # print(x)
    # for let i = 0 , i < x , i ++ 

    for i in range (0, x):
    
        for ii in range (i+1, x):
            # print(i, ii)
            sum = numbers[i] + numbers[ii]
            if sum == targetSum:
                # print(numbers[i],numbers[ii])
                answer = [numbers[i],numbers[ii]]
                return answer

print(twoNumberSum(numbers, targetSum))