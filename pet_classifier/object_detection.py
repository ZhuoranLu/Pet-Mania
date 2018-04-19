# -*- coding=utf-8 -*-
import cv2
import os
import numpy as np
# 加载猫脸检测器
catPath = "haarcascade_frontalcatface.xml"
faceCascade = cv2.CascadeClassifier(catPath)


original_images_list = os.listdir("./pictures")
image_list = []
# def read_image(filename,dataset):
# 	image = Image.open("./" + dataset + "/" + filename).convert("RGB")
# 	return np.array(image)

for filename in original_images_list:
	image_list.append(cv2.imread("./pictures/"+filename))
print(original_images_list)

def process_images(image,image_name):
	gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
	faces = faceCascade.detectMultiScale(
    	gray,
    	scaleFactor= 1.02,
    	minNeighbors=3,
    	minSize=(80, 80),
    	flags=cv2.CASCADE_SCALE_IMAGE
	)
	if len(faces) is 0:
		return 
	else:
		x = faces[0][0]
		y = faces[0][1]
		w = faces[0][2]
		h = faces[0][3]
		cop_len = min(w,h)
		print("x = ",x," y = ",y," w = ",w,"h = ",h)

		crop_image = image[y+1:y+cop_len, x+1:x+cop_len]

		cv2.imwrite("./pictures/"+image_name,crop_image)
		# cv2.putText(image,'laozhu',(x,y-7), 3, 1.2, (0, 255, 0), 2, cv2.LINE_AA)
		cv2.rectangle(image, (x, y), (x+w, y+h), (0, 0, 255), 2)


for image,image_name in zip(image_list,original_images_list):
	print(image_name)
	process_images(image,image_name)



# # 读取图片并灰度化
picture = "./Abyssinian_1.jpg"
img = cv2.imread(picture) 
process_images(img,"text.jpg") 
# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# # 猫脸检测
# faces = faceCascade.detectMultiScale(
#     gray,
#     scaleFactor= 1.02,
#     minNeighbors=3,
#     minSize=(10, 10),
#     flags=cv2.CASCADE_SCALE_IMAGE
# )
# # 框出猫脸并加上文字说明
# if len(faces) is 0:
# 	print("no face")
# else:
# 	for (x, y, w, h) in faces:
# 		print("x = ",x," y = ",y," w = ",w,"h = ",h)
# 		cv2.rectangle(img, (x, y), (x+w, y+h), (0, 0, 255), 2)
# 		cv2.putText(img,'laozhu',(x,y-7), 3, 1.2, (0, 255, 0), 2, cv2.LINE_AA)

# # 显示图片并保存
# 	roi_img = src_img(Range(,100),Range(50,200));

# 	# cv2.imshow('Cat?', img)
# 	cv2.imwrite("./pictures/"+picture,img)
# 	c = cv2.waitKey(1000)
# 	cv2.destroyAllWindows()  
# exit(1)
