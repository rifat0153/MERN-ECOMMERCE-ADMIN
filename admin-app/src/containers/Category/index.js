import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getAllCategory } from "../../actions";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

/**
 * @author
 * @function Category
 **/

const Category = (props) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const handleShow = () => setShow(true);

  const handleClose = () => {
    const form = new FormData();

    form.append("name", categoryName);
    form.append("parentId", parentCategoryId);
    form.append("categoryImage", categoryImage);

    dispatch(addCategory(form));

    // const cat = {
    //     categoryName,
    //     parentCategoryId,
    //     categoryImage
    // }

    // console.log(cat);

    setShow(false);
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const rederCategories = (categories) => {
    let cat = [];
    for (let category of categories) {
      cat.push(
        <li key={category._id}>
          {category.name}
          {/* type in the name children in backend ...already data exists..so keeping the wrong name for now */}
          {category.clildren.length > 0 ? (
            <ul>{rederCategories(category.clildren)}</ul>
          ) : null}
        </li>
      );
    }

    return cat;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.clildren.length > 0) {
        createCategoryList(category.clildren, options);
      }
    }

    return options;
  };

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>
              {rederCategories(category.categories)}
              {/* {JSON.stringify(createCategoryList(category.categories))} */}
            </ul>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={categoryName}
            placeholder={"Category Name"}
            onChange={(e) => setCategoryName(e.target.value)}
          />

          <select
            className="form-control"
            value={parentCategoryId}
            onChange={(e) => setParentCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {createCategoryList(category.categories).map((c) => (
              <option key={c._id} value={c.value}>
                {c.name}
              </option>
            ))}
          </select>

          <input
            type="file"
            name="categoryImage"
            onChange={handleCategoryImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Category;
