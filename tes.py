

def caculate(a, b, op):
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b
    elif op == '/':
        return a / b
    elif op == '%':
        return a % b
    else:
        return 'Invalid operation'


def main():
    a = int(input('Enter first number: '))
    b = int(input('Enter second number: '))
    op = input('Enter operation: ')
    print(caculate(a, b, op))
