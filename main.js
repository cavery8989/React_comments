var data = [
  {
    id:1,
    author: 'Chris',
    text: "I like the sun"
  },
  {
    id:2,
    author: 'Bob',
    text: 'It Keeps a warm and shelters us from the dark place.'
  }
]



var CommentBox = React.createClass({

  render: function () {
    return(
      <div className="commentBox">
        <h1>Comments Section</h1>
        <CommentList data = {this.props.data}/>
        <CommentsForm/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function () {
    // create comment array by mapping over data.
    var commentNodes =  this.props.data.map(comment =>{
      return(
        <Comment author={comment.author} key ={comment.id}>
          {comment.text}
        </Comment>
      )
    });
    return (
      <div className="commentList">
        <h3>Comments</h3>
        {commentNodes}
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function () {
    var md = new Remarkable();
    return(
      <div className="comment">
      <h4 className="commentAuthor">
        {this.props.author}
      </h4>
      <p>
        {this.props.children}
      </p>
    </div>
    )
  }
});

var CommentsForm = React.createClass({
  render: function () {
    return(
      <form className="commentForm">
        <input type="text" placeholder="Enter name..."/>
        <input tyep="text" placeholder="Enter message..."/>
        <input type="submit" value='Post'/>
      </form>
    );
  }
});

ReactDOM.render(
  <CommentBox CommentBox url="**This needs to be put in**"/>,
  document.getElementById('example'));