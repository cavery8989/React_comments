var CommentBox = React.createClass({

  render: function () {
    return(
      <div className="commentBox">
        <h1>Comments Section</h1>
        <CommentList/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        <h3>Comments</h3>
        <Comment/>
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function () {
    return(
      <div className="comment">
      <h4 className="commentAuthor"></h4>
      <p></p>
    </div>
    )
  }
});

ReactDOM.render(<CommentBox/>, document.getElementById('example'));