from collections import namedtuple
from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy
import requests
app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

# ##1.
# video={}
# class Video(Resource):
# 	def get(self,name,test):
# 		return {"name":name,"test":test}
# api.add_resource(Video,"/video/<string:name>/<int:test>")


# ##2.
# names={"james":{"id":23,"team":"laker"},
# "kobe":{"id":24,"team":"laker"}}
# class Video(Resource):
# 	def get(self,name):
# 		return names[name]
# api.add_resource(Video,"/video/<string:name>")

# ##3.
# reqparse
# video_put_args = reqparse.RequestParser()
# video_put_args.add_argument("name", type=str, help="Name of the video is required", required=False)
# video_put_args.add_argument("views", type=int, help="Views of the video", required=False)
# video_put_args.add_argument("likes", type=int, help="Likes on the video", required=False)

# video={}
# class Video(Resource):
# 	def get(self,video_id):
# 		return video[video_id]
# 	def put(self, video_id):
# 		# print(requests.form["likes"])
# 		# "likes"
# 		# "name"
# 		# "view"
# 		args=video_put_args.parse_args()
# 		return {video_id:args}
# api.add_resource(Video,"/video/<int:video_id>")


# ##4.
# video_put_args = reqparse.RequestParser()
# video_put_args.add_argument("name", type=str, help="Name of the video is required", required=True)
# video_put_args.add_argument("views", type=int, help="Views of the video", required=True)
# video_put_args.add_argument("likes", type=int, help="Likes on the video", required=True)

# video={}
# class Video(Resource):
# 	def get(self,video_id):
# 		return video[video_id]
# 	def put(self, video_id):
# 		args=video_put_args.parse_args()
# 		video[video_id]=args
# 		return video[video_id],200
# api.add_resource(Video,"/video/<int:video_id>")

# ##5.
# video_put_args = reqparse.RequestParser()
# video_put_args.add_argument("name", type=str, help="Name of the video is required", required=True)
# video_put_args.add_argument("views", type=int, help="Views of the video", required=True)
# video_put_args.add_argument("likes", type=int, help="Likes on the video", required=True)

# video={}

# def abort_if_video_id_doesnt_exist(video_id):
# 	if video_id not in video:
# 		abort(404,message="invalid")

# class Video(Resource):
# 	def get(self,video_id):
# 		abort_if_video_id_doesnt_exist(video_id)
# 		return video[video_id]
# 	def put(self, video_id):
# 		args=video_put_args.parse_args()
# 		video[video_id]=args
# 		return video[video_id],200

# api.add_resource(Video,"/video/<int:video_id>")

# ###6.
# video_put_args = reqparse.RequestParser()
# video_put_args.add_argument("name", type=str, help="Name of the video is required", required=True)
# video_put_args.add_argument("views", type=int, help="Views of the video", required=True)
# video_put_args.add_argument("likes", type=int, help="Likes on the video", required=True)

# video={}

# def abort_if_video_id_doesnt_exist(video_id):
# 	if video_id not in video:
# 		abort(404,message="invalid")
# def abort_if_video_exist(video_id):
# 	if video_id in video:
# 		abort(409,message="invalid, already exist")

# class Video(Resource):
# 	def get(self,video_id):
# 		abort_if_video_id_doesnt_exist(video_id)
# 		return video[video_id]
# 	def put(self, video_id):
# 		abort_if_video_exist(video_id)
# 		args=video_put_args.parse_args()
# 		video[video_id]=args
# 		return video[video_id],200
# 	def delete(self,video_id):
# 		abort_if_video_id_doesnt_exist(video_id)
# 		del video[video_id]
# 		return "del success",204 
# api.add_resource(Video,"/video/<int:video_id>")


# ###7
# # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
# # db = SQLAlchemy(app)


# class VideoModel(db.Model):
# 	id = db.Column(db.Integer, primary_key=True)
# 	name = db.Column(db.String(100), nullable=False)
# 	views = db.Column(db.Integer, nullable=False)
# 	likes = db.Column(db.Integer, nullable=False)

# 	def __repr__(self):
# 		return f"Video(name ={name}, views = {views}, likes = {likes})"

# ####RUN ONLY ONE TIME TO INITIATE THE DB.
# # db.create_all()
	
# video_put_args = reqparse.RequestParser()
# video_put_args.add_argument("name", type=str, help="Name of the video is required", required=True)
# video_put_args.add_argument("views", type=int, help="Views of the video", required=True)
# video_put_args.add_argument("likes", type=int, help="Likes on the video", required=True)

# # resource field SERIALIZING OBJECT
# resource_fields = {
# 	'id': fields.Integer,
# 	'name': fields.String,
# 	'views': fields.Integer,
# 	'likes': fields.Integer
# }

# class Video(Resource):
# 	@marshal_with(resource_fields)
# 	def get(self,video_id):
# 		result=VideoModel.query.filter_by(id=video_id).first()
# 		if not result:
# 			abort(404, message="Could not find video with that id")
# 		return result

# 	@marshal_with(resource_fields)
# 	def put(self, video_id):
# 		args=video_put_args.parse_args()
# 		result = VideoModel.query.filter_by(id=video_id).first()
# 		if result:
# 			abort(409, message="Video id taken...")

# 		video=VideoModel(id=video_id,name=args["name"],views=args["views"],likes=args["likes"])
# 		db.session.add(video)
# 		db.session.commit()
# 		return video,201

# api.add_resource(Video,"/video/<int:video_id>")


### 8.

class VideoModel(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(100), nullable=False)
	views = db.Column(db.Integer, nullable=False)
	likes = db.Column(db.Integer, nullable=False)

	def __repr__(self):
		return f"Video(name ={name}, views = {views}, likes = {likes})"

####RUN ONLY ONE TIME TO INITIATE THE DB.
# db.create_all()
	
video_put_args = reqparse.RequestParser()
video_put_args.add_argument("name", type=str, help="Name of the video is required", required=True)
video_put_args.add_argument("views", type=int, help="Views of the video", required=True)
video_put_args.add_argument("likes", type=int, help="Likes on the video", required=True)


# update_arg
video_update_args = reqparse.RequestParser()
video_update_args.add_argument("name", type=str, help="Name of the video is required")
video_update_args.add_argument("views", type=int, help="Views of the video")
video_update_args.add_argument("likes", type=int, help="Likes on the video")

# resource field SERIALIZING OBJECT
resource_fields = {
	'id': fields.Integer,
	'name': fields.String,
	'views': fields.Integer,
	'likes': fields.Integer
}

class Video(Resource):
	@marshal_with(resource_fields)
	def get(self,video_id):
		result=VideoModel.query.filter_by(id=video_id).first()
		if not result:
			abort(404, message="Could not find video with that id")
		return result

	@marshal_with(resource_fields)
	def put(self, video_id):
		args=video_put_args.parse_args()
		result = VideoModel.query.filter_by(id=video_id).first()
		if result:
			abort(409, message="Video id taken...")

		video=VideoModel(id=video_id,name=args["name"],views=args["views"],likes=args["likes"])
		db.session.add(video)
		db.session.commit()
		return video,201

	@marshal_with(resource_fields)
	def patch(self,video_id):
		args = video_update_args.parse_args()
		result = VideoModel.query.filter_by(id=video_id).first()
		if not result:
			abort(404, message="id doesn't exist, cannot update")

		if args['name']:
			result.name = args['name']
		if args['views']:
			result.views = args['views']
		if args['likes']:
			result.likes = args['likes']

		# already exist no add
		db.session.commit()

		return result

api.add_resource(Video,"/video/<int:video_id>")



# run this
if __name__=="__main__":
	app.run()
