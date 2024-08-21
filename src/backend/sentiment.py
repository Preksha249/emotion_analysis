import re
import pandas as pd
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt

# Function to preprocess text data
def preprocess_and_vectorize(data_path):
    # Load data
    data = pd.read_csv(data_path)
    
    # Define text preprocessing function
#     def preprocess_text(text):
#         text = re.sub(r'http\S+', '', text)  # Remove URLs
#         text = re.sub(r'<.*?>', '', text)    # Remove HTML tags
#         text = re.sub(r'[^\w\s]', '', text)  # Remove punctuation
#         text = text.lower()                  # Convert to lowercase
#         tokens = word_tokenize(text)
#         tokens = [word for word in tokens if word not in stopwords.words('english')]
#         lemmatizer = WordNetLemmatizer()
#         tokens = [lemmatizer.lemmatize(word) for word in tokens]
#         return ' '.join(tokens)
    
#     # Apply preprocessing to the text data
#     data['cleaned_text'] = data['text'].apply(preprocess_text)
    
#     # Feature extraction using TF-IDF
#     vectorizer = TfidfVectorizer(max_features=5000)
#     X = vectorizer.fit_transform(data['cleaned_text']).toarray()
#     y = data['label']  # Assume 'label' is the sentiment column

#     return X, y, vectorizer

# # Function to train and evaluate the sentiment analysis model
# def train_and_evaluate_model(X, y):
#     # Split data into training and testing sets
#     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
#     # Train a Naive Bayes classifier
#     model = MultinomialNB()
#     model.fit(X_train, y_train)
    
#     # Make predictions and evaluate the model
#     y_pred = model.predict(X_test)
#     accuracy = accuracy_score(y_test, y_pred)
    
#     # Print evaluation metrics
#     print(f'Accuracy: {accuracy}')
#     print(classification_report(y_test, y_pred))
    
#     # Confusion Matrix
#     cm = confusion_matrix(y_test, y_pred)
#     sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
#     plt.xlabel('Predicted')
#     plt.ylabel('Actual')
#     plt.show()

#     return model

# Example usage
if __name__ == "__main__":
    data_path = 'sentiment_data.csv'  # Replace with the path to your data file
    X, y, vectorizer = preprocess_and_vectorize(data_path)
    # model = train_and_evaluate_model(X, y)
