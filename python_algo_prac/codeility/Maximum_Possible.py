N=15958


def solution(N):

    S= str(N)
    input_array = list(S)
    indexNums=[]
    results =[]
    # print(input_array)

    if(input_array[0] != "-"):
        for i in range(len(input_array)):
            if input_array[i]=="5":
                indexNums.append(i)
        for j in range(len(indexNums)):

            indexNum =indexNums[j]
            result = input_array.copy()
            result[indexNum] = "a"
            results.append(result)
        finalAnswer =[]
        for x in results:
            x.remove("a")
            finalAnswer.append(int("".join(x)))
        return max(finalAnswer)
    else:
        for i in range(1, len(input_array)):
            if input_array[i] == "5":
                indexNums.append(i)
        for j in range(len(indexNums)):
            indexNum = indexNums[j]
            result = input_array.copy()
            result[indexNum] = "a"
            results.append(result)
        finalAnswer = []
        for x in results:
            x.remove("a")
            finalAnswer.append(int("".join(x)))
        return max(finalAnswer)

print(solution(N))
print(solution(-5859))
print(solution(5000))
print(solution(-5000))