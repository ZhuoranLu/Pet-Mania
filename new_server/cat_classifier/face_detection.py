print("zhe li shi ni ma de python")
# -*- coding=utf-8 -*-
import cv2
import os
import sys
import numpy as np

image_filename = sys.argv[-1]
print(image_filename)
# print("zhe li shi ni ma de python")

catPath = "./cat_classifier/haarcascade_frontalcatface.xml"
faceCascade = cv2.CascadeClassifier(catPath)


# original_images_list = os.listdir("./buout_test")
# image_list = []
# # def read_image(filename,dataset):
# # 	image = Image.open("./" + dataset + "/" + filename).convert("RGB")
# # 	return np.array(image)

# for filename in original_images_list:
# 	image_list.append(cv2.imread("./buout_test/"+filename))
# # print(original_images_list)

def process_images(image,image_name):
	try:
		gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
		faces = faceCascade.detectMultiScale(
    		gray,
    		scaleFactor= 1.02,
    		minNeighbors=3,
    		minSize=(100, 100),
    		flags=cv2.CASCADE_SCALE_IMAGE
		)
		print(faces)
		if len(faces) is 0:
			print("there is no cat face")
			return False
		else:
			x = faces[0][0]
			y = faces[0][1]
			w = faces[0][2]
			h = faces[0][3]
			cop_len = min(w,h)
			print("x = ",x," y = ",y," w = ",w,"h = ",h)

			crop_image = image[y+1:y+cop_len, x+1:x+cop_len]

			cv2.imwrite("./cat_classifier/test_face_pictures/"+image_name,crop_image)
		# cv2.putText(image,'laozhu',(x,y-7), 3, 1.2, (0, 255, 0), 2, cv2.LINE_AA)
			cv2.rectangle(image, (x, y), (x+w, y+h), (0, 0, 255), 2)
			return True
	except:
		print("picture error")
		sys.exit(2)


# for image,image_name in zip(image_list,original_images_list):
# 	print("the file name is =  ",image_name)
# 	process_images(image,image_name)


# picture = "./bengal.jpeg"
img = cv2.imread("./cat_classifier/test_original_pictures/"+ image_filename) 
fix_image = cv2.resize(img,(500, 500), interpolation = cv2.INTER_CUBIC)
cv2.imwrite("./cat_classifier/test_original_pictures/"+ image_filename,fix_image)


if img is None:
	# img = cv2.imread("./test_original_pictures/"+ image_filename) 
	print("there is no picture")
	exit(2)

# print("./cat_classifier/test_original_pictures/"+ image_filename)
# cv2.imshow('image',img)
result = process_images(fix_image,"face_"+image_filename) 

if result is True:
	sys.exit(1)
else:
	sys.exit(0)

# picture = "./persian.jpeg"
# img = cv2.imread(picture) 
# process_images(img,"test_persian.jpg") 
# picture = "./egip.jpeg"
# img = cv2.imread(picture) 
# process_images(img,"test_egip.jpg")
# picture = "./Bombat.jpeg"
# img = cv2.imread(picture) 
# process_images(img,"test_Bombat.jpg")
# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# faces = faceCascade.detectMultiScale(
#     gray,
#     scaleFactor= 1.02,
#     minNeighbors=3,
#     minSize=(10, 10),
#     flags=cv2.CASCADE_SCALE_IMAGE
# )

# if len(faces) is 0:
# 	print("no face")
# else:
# 	for (x, y, w, h) in faces:
# 		print("x = ",x," y = ",y," w = ",w,"h = ",h)
# 		cv2.rectangle(img, (x, y), (x+w, y+h), (0, 0, 255), 2)
# 		cv2.putText(img,'laozhu',(x,y-7), 3, 1.2, (0, 255, 0), 2, cv2.LINE_AA)

# 	roi_img = src_img(Range(,100),Range(50,200));

# 	# cv2.imshow('Cat?', img)
# 	cv2.imwrite("./pictures/"+picture,img)
# 	c = cv2.waitKey(1000)
# 	cv2.destroyAllWindows()  
# exit(1)
