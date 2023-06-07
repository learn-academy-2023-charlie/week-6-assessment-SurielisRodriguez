# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This states that BlogPostsCOntroller is a class that inherits from the ApplicationController and allows our new controller to inherit all the methods and behaviors defined in our ApplicationController.
class BlogPostsController < ApplicationController
  def index
    # ---2) This states that at the index we want to see all of our blod posts
    @posts = BlogPost.all
  end

  # ---3)This is creating a method for show which will bring up a specific instance in our databse and we define show as a post that is refrenced by the params ID
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)This is creating a method for new which creates a new instance in our application of a new post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)This is a method for create, which creates the new blog post with the specified params for our post in the strong params and allows us to pass a title and content. The if post valid makes sure that the data entered is going to be valid, if it is then we are redirected to the blog posts path we've created. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)This method allows us to define the blod post were looking for by id and designating to be edited
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This saying that in this function were gonna be editing the designated strong params in our private and is checking for the validity of the information that is going to get updated in our database. If its valid it will redirect the blog posts path we've created.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)This is saying if our blog post is deleted, then its going to redirect us to blog posts path we've created.
      redirect_to blog_posts_path
    end
  end

  # ---9)This is where we designate our strong parameters, which dictate what information can be passed into the database and checks for validity of each entry and its corresponding values that we haev set in our model. 
  private
  def blog_post_params
    # ---10)This is explicitly stating that for each blog post, it will only allow the paramters of title and content to passed into the database. This will verify that the information passsed matches the type of value were supposed to be reveiving, this is expressed during the creation of our model. 
    params.require(:blog_post).permit(:title, :content)
  end
end
