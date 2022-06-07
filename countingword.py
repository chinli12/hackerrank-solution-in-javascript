# Write a python program that counts and returns the number of words in a given text.
def word_count(text):
    word_count = 0
    for word in text.split():
        word_count += 1
    return word_count


print(word_count("Hello World"))
