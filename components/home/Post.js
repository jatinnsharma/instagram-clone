import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <PostLikes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={styles.mainContainer}>
    <View style={styles.containerLeft}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={styles.username}>{post.user}</Text>
    </View>
    <Text style={styles.text}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);
const PostFooter = ({ post }) => (
  <View style={{ flexDirection: "row" }}>
    <View
      style={{
        flexDirection: "row",
        width: "32%",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity>
        <Icon name="heart-outline" size={27} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="chatbubble-outline" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          style={styles.shareicon}
          name="send-outline"
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <TouchableOpacity>
        <Icon
          style={styles.icon}
          name="bookmark-outline"
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  </View>
);

const PostLikes = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      marginTop: 4,
    }}
  >
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")}Like
    </Text>
  </View>
);
const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);
const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View{post.comments.length > 1 ? " all " : " "}
        {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);
const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index}>
        <Text style={{ color: "white" ,flexDirection:'row',marginTop: 5 }}>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  containerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  story: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  username: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
  },
  text: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
  },
  shareicon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
  },
});

export default Post;
