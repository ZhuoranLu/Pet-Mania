import os
import numpy as np
from PIL import Image
from keras.utils import np_utils
from keras.models import Sequential
from keras.layers.core import Dense,Dropout,Activation, Flatten
from keras.optimizers import SGD, RMSprop, Adam
from keras.layers import Conv2D, MaxPooling2D

test_images_list = os.listdir("./detection_train")
train_images_list = os.listdir("./detection_test")

def read_image(filename,dataset):
	image = Image.open("./" + dataset + "/" + filename).convert("RGB")
	new_img = image.resize((50, 50), Image.BILINEAR)
	return np.array(new_img)

#train input list 
x_train = []
x_test = []
y_train = []
y_test = []

for filename in test_images_list:
	x_train.append(read_image(filename,"detection_train"))
	y_train.append(int(filename.split('_')[0]))

for filename in train_images_list:
	x_test.append(read_image(filename,"detection_test"))
	y_test.append(int(filename.split('_')[0]))

print(len(x_train[0]))
print(len(x_train[1]))
print(len(x_train[0][0]))
x_train = np.array(x_train)
y_train = np.array(y_train)
x_test = np.array(x_test)
y_test = np.array(y_test)
# print(y_test)
#transfer to categorical
y_train = np_utils.to_categorical(y_train)
y_test = np_utils.to_categorical(y_test)
# print(y_test)

#normalize the input data

x_train = x_train.astype("float32")
x_test = x_test.astype("float32")

x_train /= 255
x_test /= 255

#build cnn

model = Sequential()
model.add(Conv2D(32,(3,3),activation = "relu", input_shape = (50,50,3)))
model.add(Conv2D(32,(3,3),activation = "relu"))
model.add(MaxPooling2D(pool_size = (2,2)))
model.add(Dropout(0.25))

model.add(Conv2D(64, (3, 3), activation='relu'))
model.add(Conv2D(64, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

model.add(Flatten())
model.add(Dense(256, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(4, activation='softmax'))

sgd = SGD(lr=0.01, decay=1e-6, momentum=0.9, nesterov=True)
model.compile(loss='categorical_crossentropy', optimizer=sgd, metrics=['accuracy'])

model.fit(x_train, y_train, batch_size=10, epochs=32)
model.save_weights('./cat_face_weights.h5', overwrite=True)

score = model.evaluate(x_test, y_test, batch_size=10)
print(score)




