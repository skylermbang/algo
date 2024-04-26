input = [3, 5, 6, 1, 2, 4]


def find_min_integer(array):
    # you can write to stdout for debugging purposes, e.g.
    # print("this is a debug message")

    def solution(A):
        newArray1 = sorted(A)
        minN = min(newArray1)
        newArray = list(set(newArray1))
        if minN < 0:
            return 1
        else:
            # print(newArray)

            for i in range(len(newArray) - 1):
                if newArray[i + 1] - newArray[i] != 1:
                    return newArray[i] + 1
            return max(newArray) + 1


result = find_min_integer(input)
print(result)
